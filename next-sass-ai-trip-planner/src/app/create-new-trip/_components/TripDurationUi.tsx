import { PropsType } from "./EmptyBoxState";

const TripDurationArray = [
  { id: 1, title: "Weekend Trip", desc: "2–3 days of short getaway", icon: "🗓️" },
  { id: 2, title: "One Week", desc: "Ideal for exploring one region", icon: "📅" },
  { id: 3, title: "Two Weeks", desc: "Perfect for in-depth experience", icon: "🧳" },
  { id: 4, title: "A Month", desc: "Long adventure experience", icon: "🌍" },
];

const TripDurationUi = ({ onSelectOption }: PropsType) => {
  return (
    <section className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {TripDurationArray.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelectOption(item.title)}
          className="border rounded-2xl p-4 text-center hover:bg-gray-50 transition shadow-sm"
        >
          <div className="text-3xl mb-2">{item.icon}</div>
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </button>
      ))}
    </section>
  );
};

export default TripDurationUi;
