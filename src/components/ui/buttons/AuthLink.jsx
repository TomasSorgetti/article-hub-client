import { Link } from "react-router-dom";

export default function AuthLink({ to = "/", children }) {
  return (
    <Link
      to={to}
      className="duration-300 ease-in-out border border-primary text-primary bg-linear-to-b from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 px-4 py-2 rounded-full"
    >
      {children}
    </Link>
  );
}
