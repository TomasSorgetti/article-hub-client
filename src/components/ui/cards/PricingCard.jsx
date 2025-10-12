import { SuscribeToProPlan } from "../../../services/subscriptions";

export default function PricingCard({
  id = null,
  name,
  price,
  items = [],
  isActualPlan = false,
  popular = false,
  handleClick = () => {},
}) {
  return (
    <div className="relative flex flex-col gap-4 w-full max-w-[22.5rem] min-h-[32rem] border border-border rounded-2xl p-6">
      {popular && (
        <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-primary rounded px-2 py-1">
          <span className="text-xs text-font-primary font-bold uppercase">
            Most Popular
          </span>
        </div>
      )}

      <div className="flex-1">
        <h2 className="text-3xl font-bold mt-4">{name}</h2>
        <span className="text-4xl font-bold mt-4 block">{price} USD</span>
        <ul className="mt-10 text-font-secondary flex flex-col gap-2">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => handleClick(id, isActualPlan)}
        className={`bg-white text-background h-12 rounded text-center flex items-center justify-center gap-2 text-base font-bold ${
          isActualPlan ? "cursor-not-allowed opacity-80" : "cursor-pointer"
        }`}
      >
        {isActualPlan ? "Actual Plan" : "Select Plan"}
      </button>
    </div>
  );
}
