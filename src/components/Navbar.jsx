import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-0">
        <Link to="/">ArticleHub</Link>

        <ul className="flex flex-col lg:flex-row lg:space-x-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/docs">Docs</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>

        <ul className="flex flex-col lg:flex-row lg:space-x-6">
          <li>
            <a
              href="https://github.com/TomasSorgetti/blog-saas"
              target="_blank"
            >
              Star us
            </a>
          </li>
          <li>
            <Link to="/auth/login">Sign In</Link>
          </li>
          <li>
            <Link to="/auth/register">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
