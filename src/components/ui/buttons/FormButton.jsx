export default function FormButton({ children, className }) {
  return (
    <button
      type="submit"
      className={`duration-300 ease-in-out w-full bg-white text-background min-h-12 text-center flex items-center justify-center gap-2 text-base font-bold cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
