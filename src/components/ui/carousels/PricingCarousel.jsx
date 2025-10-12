import { useState } from "react";
import PricingCard from "../cards/PricingCard";
import video0 from "../../../assets/videos/1.mp4";
import image0 from "../../../assets/images/pricing/1.svg";
import video1 from "../../../assets/videos/2.mp4";
import image1 from "../../../assets/images/pricing/2.svg";
import video2 from "../../../assets/videos/3.mp4";
import image2 from "../../../assets/images/pricing/3.svg";
import video3 from "../../../assets/videos/4.mp4";
import image3 from "../../../assets/images/pricing/4.svg";

const plans = [
  {
    id: "68cdd413217f9ea3b63e181e1",
    name: "Free Plan",
    price: "$0",
    items: ["3 Workbenches", "3 Collaborators", "1 API Key", "500 MB Storage"],
  },
  {
    id: "68cdd413217f9ea3b63e181e",
    name: "Pro Plan",
    price: "$10",
    items: ["5 Workbenches", "10 Collaborators", "3 API Keys", "2 GB Storage"],
  },
  {
    id: "68cdd413217f9ea3b63e1821",
    name: "Premium Plan",
    price: "$25",
    items: [
      "Unlimited Workbenches",
      "Unlimited Collaborators",
      "API Access",
      "10 GB Storage",
    ],
  },
  {
    id: "68cdd413217f9ea3b63e181e2",
    name: "Extra Plan",
    price: "$50",
    items: ["Unlimited Everything", "Priority Support", "Custom Integrations"],
  },
];

export default function PricingCarousel({ handleChangePlan, loading = false }) {
  const [activeCard, setActiveCard] = useState(0);

  const videos = [video0, video1, video2, video3];
  const images = [image0, image1, image2, image3];

  const visibleCount = 3;
  const total = plans.length;

  const baseOffset = -0.4;

  let offset = activeCard - Math.floor(visibleCount / 2) + baseOffset;

  if (offset < 0) offset = 0;
  if (offset > total - visibleCount) offset = total - visibleCount;

  const handleSelectCard = (index) => setActiveCard(index);

  return (
    <div className="relative w-full max-w-7xl mx-auto h-full min-h-[36rem] overflow-hidden py-60">
      <ul
        className="flex transition-transform duration-500 ease-out gap-10"
        style={{
          transform:
            activeCard === 0
              ? `translateX(20%)`
              : `translateX(-${offset * (100 / visibleCount)}%)`,
        }}
      >
        {plans.map((plan, i) => (
          <li
            key={plan.id}
            className={`cursor-pointer ${
              i === activeCard ? "select-none" : ""
            }`}
            style={{ width: "calc((100% - 2rem) / 3)" }}
            onClick={() => handleSelectCard(i)}
          >
            <PricingCard
              id={plan.id}
              name={plan.name}
              price={plan.price}
              items={plan.items}
              isActive={i === activeCard}
              isActualPlan={i === 0}
              video={videos[i]}
              image={images[i]}
              handleChangePlan={handleChangePlan}
              loading={loading}
            />
          </li>
        ))}
      </ul>

      {/* Máscaras laterales */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background via-background/70 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background via-background/70 to-transparent z-10" />
    </div>
  );
}
