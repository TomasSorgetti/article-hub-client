import { Check } from "lucide-react";

export default function PricingCard({
  id = null,
  video,
  image,
  name,
  price,
  items = [],
  isActualPlan = false,
  isActive = false,
  handleChangePlan = () => {},
  loading = false,
}) {
  return (
    <div
      className={`relative flex flex-col w-[390px] md:w-[366px] sm:w-[91%] sm:max-w-[366px] xs:w-[288px] flex-shrink-0 cursor-pointer snap-center 
      rounded-[24px] border-white/10 p-8 transition-all duration-200 h-[490px] ${
        isActive ? "border-2" : "border"
      }`}
    >
      {/* Video / Background */}
      <div
        className={`pointer-events-none select-none rounded-[inherit] absolute -left-[70%] -top-[300px] -z-20 aspect-[0.925925] w-[1000px] md:-top-[282px] md:w-[932px] sm:-left-[68.666%] sm:-top-[56%] sm:w-[255%] ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 -translate-x-1">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover rounded-[inherit] transition-opacity duration-500"
            />
          )}
          <div className="bg-circular absolute inset-0 w-full h-full object-cover rounded-[inherit]"></div>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex-1 relative z-10">
        <h2 className="text-xl font-semibold leading-snug tracking-tight sm:text-16">
          {name}
        </h2>
        <p className="mt-2.5 text-64 font-semibold tracking-tight lg:text-5xl md:text-48 sm:text-36 flex items-center">
          {price} USD
          <span className="ml-1 text-base font-medium text-font-primary/70 sm:text-16">
            /monthly
          </span>
        </p>
        <p className="text-lg mt-4">
          For individuals and teams getting started.
        </p>

        <div className="w-full h-[1px] mt-6 bg-white/10"></div>

        <ul className="mt-6 flex flex-col gap-y-4 sm:mt-4 sm:gap-y-3 lg:mt-8">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-x-2 text-18 leading-none text-font-secondary sm:text-16"
            >
              <Check size={16} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Botón */}
      <button
        onClick={() => handleChangePlan(id, isActualPlan)}
        className={`mt-auto h-14 w-full rounded-full bg-white text-black font-bold text-18 flex items-center justify-center border border-white/20 transition-all duration-200 
          hover:border-white/50 hover:bg-opacity-85 sm:!h-10 sm:!text-16 ${
            isActualPlan || loading
              ? "cursor-not-allowed opacity-80"
              : "cursor-pointer"
          }`}
      >
        {loading ? "Loading..." : isActualPlan ? "Actual Plan" : "Select Plan"}
      </button>

      {image && (
        <div
          className={`pointer-events-none absolute -inset-px -z-10 select-none rounded-[inherit] sm:rounded-[18px] ${
            isActive ? "opacity-100" : "opacity-0"
          } [backdrop-filter:blur(1px)] transition-opacity duration-500`}
        >
          <img
            src={image}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover rounded-[inherit]"
          />
        </div>
      )}
    </div>
  );
}
