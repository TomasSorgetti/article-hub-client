import { useEffect, useState } from "react";

export default function Selector({ isActive, handleChange }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      setActive(true);
    }
  }, [isActive]);

  const handleClick = () => {
    setActive(!active);
    handleChange();
  };

  return (
    <div className="relative w-16 h-6 rounded-full border border-border mr-10">
      <button
        onClick={handleClick}
        className={`rounded-full h-10 w-10 bg-white absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer transition-all duration-500 ${
          active ? "translate-x-full" : "translate-x-0"
        }`}
      ></button>
    </div>
  );
}
