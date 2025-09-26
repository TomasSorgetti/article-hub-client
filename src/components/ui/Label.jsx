export default function Label({ children, variant = "primary", className }) {
  return (
    <label
      className={`text-${variant} border border-${variant} px-3 py-1 rounded-full text-sm font-semibold ${className}`}
    >
      {children}
    </label>
  );
}
