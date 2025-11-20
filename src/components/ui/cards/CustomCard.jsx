export default function CustomCard({ children, className }) {
  return (
    <div
      className={`relative w-full h-full border border-border/60 rounded-2xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
