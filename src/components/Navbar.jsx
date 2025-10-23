import { Link } from "react-router-dom";
import NavigationLink from "./ui/NavigationLink";
import AuthLink from "./ui/buttons/AuthLink";
import StarUsLink from "./ui/buttons/StarUsLink";
import ArticleHubLogo from "../assets/ArticleHub.svg";
import Image from "./ui/Image";
import Notifications from "./ui/Notifications";
import { useAuthStore } from "../lib/store/auth";
import AuthDropdown from "./ui/AuthDropdown";

export default function Navbar() {
  const { isAuthenticated } = useAuthStore();

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-background">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-0">
        <Link to="/">
          <Image src={ArticleHubLogo} alt="article hub logo" />
        </Link>

        <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
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
          {isAuthenticated && (
            <li>
              <Link
                to="/user/welcome"
                className="text-font-primary font-semibold cursor-pointer bg-primary px-3 py-2 rounded"
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>

        <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
          <li>
            <StarUsLink />
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Notifications />
              </li>
              <li>
                <AuthDropdown />
              </li>
            </>
          ) : (
            <>
              <li>
                <AuthLink to="/auth/login">Sign In</AuthLink>
              </li>
              <li>
                <AuthLink to="/auth/register">Sign Up</AuthLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
