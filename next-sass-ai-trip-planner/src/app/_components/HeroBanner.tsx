"use client";

import { Button } from "@/components/ui/button"
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"
import { Textarea } from "@/components/ui/textarea"
import { useUser } from "@clerk/nextjs"
import { Globe2, Send } from "lucide-react"
import { useRouter } from "next/navigation";
import { suggestionList } from "@/data/suggestionList";


const HeroBanner = () => {
    const { user } = useUser();
    const router = useRouter();

    const promptSubmitHandler = () => {
        if(!user) {
            router.push('/sign-in');
            return;
        } else {
            // Navigate to Create Trip Planner Page
            router.push('/create-new-trip');
        }
    }

    return (
        <article aria-label="Hero Section" className="wrapper py-15 space-y-15">
            {/* 1. Content */}
            <section className="text-center">
                <h1 className="text-2xl md:text-6xl mb-3"><strong>Hey, I'm your personal <span className="text-primary">Trip Planner</span></strong></h1>
                <p className="text-lg md:text-xl">Tell me waht you want, and i'll handle the rest: Filgits, Hotels, trip Planner - all in seconds</p>
            </section>

            {/* 2. Input Box */}
            <section className="border rounded-2xl p-4 shadow relative">
                <Textarea placeholder="Create a trip fro Parise from Germany "
                    className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none outline-none" />
                <Button size={'icon'} className="absolute bottom-5 right-5" onClick={()=>promptSubmitHandler()}> <Send className="w-4 h-4" /> </Button>
            </section>


            {/* 3. Suggestion List */}
            <section className="flex flex-wrap gap-3 justify-center items-center">
                {suggestionList.map((item, index) => (
                    <button
                        key={index}
                        className="flex items-center gap-2 px-4 py-2 border rounded-full shadow-sm hover:bg-gray-100 transition"
                    >
                        {item.icon}
                        <span className="text-sm font-medium">{item.title}</span>
                    </button>
                ))}
            </section>

            {/* 4. Video Section */}
            <section className="w-full mx-auto text-center space-y-3">
                <h2 className="text-2xl">Not Sure where to start? <strong>See how it work?</strong></h2>
                <HeroVideoDialog
                    className="w-[85%] h-auto md:w-[60%] mx-auto"
                    animationStyle="from-center"
                    videoSrc="https://www.example.com/dummy-video"
                    thumbnailSrc="/video-thumbnail.jpg"
                    thumbnailAlt="Dummy Video Thumbnail"
                />
            </section>
        </article>
    )
}

export default HeroBanner