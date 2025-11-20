import { Link } from "react-router-dom";
import ArticleHubLogo from "../../assets/ArticleHub.svg";
import Image from "./Image";
import NavigationLink from "./NavigationLink";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="w-full mx-auto container">
        <nav className="w-full flex items-start py-16">
          <Link to="/">
            <Image
              src={ArticleHubLogo}
              alt="article hub logo"
              className="w-60"
            />
          </Link>

          <div className="w-full flex items-start justify-end">
            <div className="w-1/4">
              <span className="text-2xl font-semibold">Navigation</span>
              <ul className="mt-2 space-y-1">
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
            </div>

            <div className="w-1/4">
              <span className="text-2xl font-semibold">Support</span>
              <ul className="mt-2 space-y-1">
                <li>
                  <NavigationLink to="/help">Help</NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/contact">Contact</NavigationLink>
                </li>
              </ul>
            </div>

            <div className="">
              <span className="text-2xl font-semibold">Company</span>
              <ul className="mt-2 space-y-1">
                <li>
                  <span className="text-font-secondary">
                    contact@articlehub.com
                  </span>
                </li>
                <li>
                  <span className="text-font-secondary">
                    +54 11 9 1234 5678
                  </span>
                </li>
                <li>
                  <span className="text-font-secondary">
                    Buenos Aires, Argentina
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="w-full flex items-center justify-between py-4 border-t border-border">
          <p>Copyright</p>
          <ul className="flex items-center gap-4">
            <li>
              <Link to="#">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
