import { NavLink } from "react-router-dom";

export default function SettingsListItem({ to, text, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-font-primary flex items-center gap-2 py-2 px-1 ml-2 bg-border/30 rounded relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-2 before:w-1 before:h-[85%] before:bg-primary before:rounded-full"
          : "text-font-primary flex items-center gap-2 py-2 px-1 ml-2"
      }
    >
      {children}
      <span>{text}</span>
    </NavLink>
  );
}
