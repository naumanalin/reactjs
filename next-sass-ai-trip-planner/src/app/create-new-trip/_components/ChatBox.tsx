"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { Loader, Send } from "lucide-react";
import { useState } from "react";
import EmptyBoxState from "./EmptyBoxState";
import GroupSizeUi from "./GroupSizeUi";
import BudgetUi from "./BudgetUi";
import TripDurationUi from "./TripDurationUi";

type Message = {
  role: "user" | "assistant";
  content: string;
  ui?: string;
};

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [activeUi, setActiveUi] = useState<string | null>(null); // 👈 track active UI

  const onSend = async (text?: string) => {
    const input = text || userInput.trim();
    if (!input) return;

    // Hide previous UI when user selects something
    setActiveUi(null);

    const newMessage: Message = { role: "user", content: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setUserInput("");
    setLoading(true);

    try {
      const result = await axios.post("/api/ai-model", {
        promptMessages: updatedMessages,
      });

      const aiResp = result.data.resp || "Sorry, I couldn't understand that.";
      const ui = result.data.ui || "";
      const aiMessage: Message = { role: "assistant", content: aiResp, ui };

      setMessages((prev) => [...prev, aiMessage]);

      // 👇 Only set active UI for the latest assistant message
      if (ui) {
        setActiveUi(ui);
      } else {
        setActiveUi(null);
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
      setActiveUi(null);
    } finally {
      setLoading(false);
    }
  };

  const RenderGenerativeUi = (ui: string) => {
    switch (ui) {
      case "budget":
        return <BudgetUi onSelectOption={(v) => onSend(v)} />;
      case "groupSize":
        return <GroupSizeUi onSelectOption={(v) => onSend(v)} />;
      case "TripDuration":
        return <TripDurationUi onSelectOption={(v) => onSend(v)} />;
      default:
        return null;
    }
  };

  return (
    <article className="h-[85vh] flex flex-col">
      {/* Empty State */}
      {messages.length === 0 && <EmptyBoxState onSelectOption={onSend} />}

      {/* Chat Messages */}
      <section className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <article
            key={index}
            className={`flex mt-2 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-lg px-4 py-2 rounded-2xl ${
                msg.role === "user"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-zinc-900"
              }`}
            >
              {msg.content}

              {/* 👇 Only render the latest active UI (not all previous ones) */}
              {msg.role === "assistant" &&
                msg.ui &&
                activeUi === msg.ui && (
                  <div className="mt-3">{RenderGenerativeUi(msg.ui)}</div>
                )}
            </div>
          </article>
        ))}

        {/* Loading Indicator */}
        {loading && (
          <article className="flex justify-start mt-2">
            <div className="max-w-lg bg-gray-100 text-zinc-900 px-4 py-2 rounded-2xl flex items-center gap-2">
              <Loader className="animate-spin w-4 h-4" /> AI Agent is typing...
            </div>
          </article>
        )}
      </section>

      {/* User Input */}
      <section className="border rounded-2xl p-4 shadow relative">
        <Textarea
          placeholder="Start typing here..."
          className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none outline-none"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button
          size={"icon"}
          className="absolute bottom-5 right-5"
          onClick={() => onSend()}
          disabled={loading}
        >
          <Send className="w-4 h-4" />
        </Button>
      </section>
    </article>
  );
};

export default ChatBox;
