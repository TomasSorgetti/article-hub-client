export default function FormButton({ children, disabled, className }) {
  return (
    <button
      type="submit"
      className={`duration-300 ease-in-out w-full bg-white text-background min-h-12 text-center flex items-center justify-center gap-2 text-base font-bold cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
