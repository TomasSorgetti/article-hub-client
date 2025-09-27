import { Link, useNavigate } from "react-router-dom";
import NavigationLink from "./ui/NavigationLink";
import AuthLink from "./ui/buttons/AuthLink";
import StarUsLink from "./ui/buttons/StarUsLink";
import ArticleHubLogo from "../assets/ArticleHub.svg";
import Image from "./ui/Image";
import { SignOutUser } from "../services/auth";
import Notifications from "./ui/Notifications";
import { useAuthStore } from "../lib/store/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const { isAdmin, isAuthenticated, logout } = useAuthStore();

  const handleLogout = async () => {
    const response = await logout();

    if (response.success) {
      navigate("/auth/login");
    } else {
      navigate("/500");
    }
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-0">
        <Link to="/">
          <Image src={ArticleHubLogo} alt="article hub logo" />
        </Link>

        <ul className="flex flex-col lg:flex-row lg:space-x-12">
          <li>
            <NavigationLink to="/">Home</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/pricing">Pricing</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/blog">Blog</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/docs">Docs</NavigationLink>
          </li>
        </ul>

        {isAuthenticated ? (
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
            <li>
              <button onClick={handleLogout} className="cursor-pointer px-2">
                Logout
              </button>
            </li>
            <li>{/* <Notifications /> */}</li>
            {isAdmin && (
              <li>
                <Link to="/admin/dashboard">Admin Dashboard</Link>
              </li>
            )}
            <li>
              <AuthLink to="/user/welcome">Account</AuthLink>
            </li>
          </ul>
        ) : (
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
            <li>
              <StarUsLink />
            </li>
            <li>
              <AuthLink to="/auth/login">Sign In</AuthLink>
            </li>
            <li>
              <AuthLink to="/auth/register">Sign Up</AuthLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
