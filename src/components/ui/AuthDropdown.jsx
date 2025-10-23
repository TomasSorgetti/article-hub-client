import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../lib/store/auth";
import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import Avatar from "./Avatar";
import { LayoutDashboard, LogOut, Settings, UserPen } from "lucide-react";

export default function AuthDropdown() {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isAdmin, logout, user } = useAuthStore();

  const toggleDropdown = async () => {
    setIsOpen((prev) => !prev);
  };

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleLogout = async () => {
    const response = await logout();

    if (response.success) {
      navigate("/auth/login");
    } else {
      navigate("/500");
    }
  };

  return (
    <div ref={dropdownRef} className="relative ml-4">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 cursor-pointer text-font-secondary"
      >
        {/* todo => if user add google account method to login, and add google avatar (if doesnt allready have one), must update global state */}
        <Avatar avatar={user?.avatar} alt="Avatar actual" className="size-10" />
        {user?.username || "Account"}
      </button>

      <ul
        className={`absolute top-12 right-0 min-w-40 rounded bg-background border border-border shadow-md ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {isAdmin && (
          <li className=" text-font-secondary hover:text-font-primary hover:bg-border/20 cursor-pointer">
            <Link to="/admin/dashboard" className="flex items-center gap-6 p-2">
              <LayoutDashboard size={18} />
              Admin Dashboard
            </Link>
          </li>
        )}

        <li className="text-font-secondary hover:text-font-primary hover:bg-border/20 cursor-pointer">
          <Link
            to="/user/account/profile"
            className="flex items-center gap-6 p-2"
          >
            <UserPen size={18} />
            Profile
          </Link>
        </li>
        <li className="text-font-secondary hover:text-font-primary hover:bg-border/20">
          <Link
            to="/user/account/settings"
            className="flex items-center gap-6 p-2"
          >
            <Settings size={18} />
            Settings
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="cursor-pointer p-2 text-red-400 hover:text-red-500 hover:bg-red-400/5 w-full text-left flex items-center gap-6"
          >
            <LogOut size={18} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
