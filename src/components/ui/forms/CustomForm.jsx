import AnimatedBackground from "../AnimatedBackground";

export default function CustomForm({ children, handleSubmit, className }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-20 border border-border/40 rounded-2xl overflow-hidden w-full max-w-120 mx-auto mt-32"
    >
      <AnimatedBackground globalInteractive />
      <div
        className={`relative z-20 w-full h-full p-8 rounded-xl ${className}`}
      >
        {children}
      </div>
    </form>
  );
}
