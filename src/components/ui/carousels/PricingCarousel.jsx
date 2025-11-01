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

const videos = [video0, video1, video2, video3];
const images = [image0, image1, image2, image3];

export default function PricingCarousel({
  isAuthenticated,
  loading = false,
  plans,
}) {
  const [activeCard, setActiveCard] = useState(0);

  const visibleCount = 3;
  const total = plans.length;

  const baseOffset = -0.4;

  let offset = activeCard - Math.floor(visibleCount / 2) + baseOffset;

  if (offset < 0) offset = 0;
  if (offset > total - visibleCount) offset = total - visibleCount;

  const handleSelectCard = (index) => setActiveCard(index);

  return (
    <div className="relative w-full max-w-7xl mx-auto h-full min-h-144 overflow-hidden py-60">
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
            key={plan._id}
            className={`cursor-pointer ${
              i === activeCard ? "select-none" : ""
            }`}
            style={{ width: "calc((100% - 2rem) / 3)" }}
            onClick={() => handleSelectCard(i)}
          >
            <PricingCard
              id={plan._id}
              name={plan.name}
              price={plan.price}
              currency={plan.currency}
              items={plan.featureList}
              isActive={i === activeCard}
              isActualPlan={i === 0}
              video={videos[i]}
              image={images[i]}
              isAuthenticated={isAuthenticated}
              loading={loading}
            />
          </li>
        ))}
      </ul>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-r from-background via-background/70 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l from-background via-background/70 to-transparent z-10" />
    </div>
  );
}
