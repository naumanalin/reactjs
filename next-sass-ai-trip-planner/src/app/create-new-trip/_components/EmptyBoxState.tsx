
export type PropsType = {
  onSelectOption: (value: string) => void;
};

import { suggestionList } from "@/data/suggestionList";

const EmptyBoxState = ({ onSelectOption }: PropsType) => {
  return (
    <article className="mt-7">
      <h2 className="text-2xl text-center">
        Start Planning New <strong className="text-primary">Trip</strong> using AI
      </h2>
      <p className="text-center mt-2 text-gray-600">
        Discover personalized travel itineraries.
      </p>

      <section className="flex flex-col gap-3 justify-center items-center mt-5">
        {suggestionList.map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-2 px-4 py-2 border rounded-full shadow-sm hover:bg-gray-100 transition"
            onClick={() => onSelectOption(item.title)}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.title}</span>
          </button>
        ))}
      </section>
    </article>
  );
};

export default EmptyBoxState;
