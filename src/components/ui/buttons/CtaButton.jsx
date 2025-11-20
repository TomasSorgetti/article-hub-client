import { Link } from "react-router-dom";

export default function CtaButton({ to = "/", children, className }) {
  return (
    <Link
      to={to}
      type="submit"
      className={`duration-300 ease-in-out border border-primary text-primary bg-linear-to-b from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 px-8 py-2 min-h-15 rounded-full flex items-center justify-center text-center ${className}`}
    >
      {children}
    </Link>
  );
}
