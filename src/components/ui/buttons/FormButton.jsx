export default function FormButton({ children, disabled, loading, className, type = "submit" }) {
  return (
    <button
      type={type}
      className={`duration-300 ease-in-out rounded w-full bg-white text-background min-h-12 text-center flex items-center justify-center gap-2 text-base font-bold cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none ${
        disabled || loading ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
