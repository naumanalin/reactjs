import { PropsType } from "./EmptyBoxState";

const GroupSizeUiArray = [
  {
    id: 1,
    title: "Just Me",
    desc: "A solo traveler in exploration",
    icon: "🧍",
    people: "1 Person",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: "👫",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun-loving adventurers",
    icon: "👨‍👩‍👧‍👦",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers",
    icon: "👬",
    people: "5 to 10 People",
  },
];

const GroupSizeUi = ({ onSelectOption }: PropsType) => {
  return (
    <section className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {GroupSizeUiArray.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelectOption(`${item.title}: ${item.people}`)}
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

export default GroupSizeUi;
