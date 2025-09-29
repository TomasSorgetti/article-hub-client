import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../lib/store/auth";
import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

export default function AuthDropdown() {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isAdmin, logout } = useAuthStore();

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
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="w-8 h-8 rounded-full bg-border"></div>
        Account
      </button>

      <ul
        className={`absolute top-12 right-0 min-w-40 rounded bg-background border border-border shadow-md ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {isAdmin && (
          <li className=" text-font-secondary hover:text-font-primary hover:bg-border/20 cursor-pointer">
            <Link to="/admin/dashboard" className="block p-2">
              Admin Dashboard
            </Link>
          </li>
        )}
        <li className="text-font-secondary hover:text-font-primary hover:bg-border/20 cursor-pointer">
          <Link to="/user/welcome" className="block p-2">
            Dashboard
          </Link>
        </li>
        <li className="text-font-secondary hover:text-font-primary hover:bg-border/20 cursor-pointer">
          <Link to="/user/account/profile" className="block p-2">
            Profile
          </Link>
        </li>
        <li className="text-font-secondary hover:text-font-primary hover:bg-border/20">
          <Link to="/user/account/settings" className="block p-2">
            Settings
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="cursor-pointer p-2 text-red-400 hover:text-red-500 hover:bg-red-400/5 w-full text-left"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
