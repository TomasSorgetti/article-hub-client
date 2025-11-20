import AnimatedBackground from "../AnimatedBackground";

export default function AddNewWorkbenchCard({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label="Add new workbench"
      className="relative z-10 flex flex-col items-center justify-center w-full max-w-90 h-48 cursor-pointer p-4 rounded-2xl overflow-hidden text-6xl border border-border/40 hover:border-border/60 text-font-secondary font-thin hover:text-font-primary transition-all duration-300"
    >
      <span className="relative z-10">+</span>

      <AnimatedBackground />
    </button>
  );
}
