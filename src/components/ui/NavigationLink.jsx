import { NavLink } from "react-router-dom";

export default function NavigationLink({ to = "/", children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-font-primary"
          : "text-font-secondary hover:text-font-primary duration-300 ease-in-out"
      }
    >
      {children}
    </NavLink>
  );
}
