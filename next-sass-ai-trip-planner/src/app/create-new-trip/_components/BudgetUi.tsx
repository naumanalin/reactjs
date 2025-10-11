import { PropsType } from "./EmptyBoxState";

const budgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💸",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "👑",
    color: "bg-purple-100 text-purple-600",
  },
];

const BudgetUi = ({ onSelectOption }: PropsType) => {
  return (
    <section className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {budgetOptions.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelectOption(item.title)}
          className={`rounded-2xl p-4 text-center hover:shadow-md transition border ${item.color}`}
        >
          <div className="text-3xl mb-2">{item.icon}</div>
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-sm">{item.desc}</p>
        </button>
      ))}
    </section>
  );
};

export default BudgetUi;
