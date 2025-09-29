import { Link } from "react-router-dom";

export default function UserBar() {
  return (
    <aside className="fixed top-0 left-0 z-40 h-full min-h-screen px-4 py-32 border-r border-border">
      <ul className="flex flex-col gap-8">
        <li>
          <Link to="/user/welcome">Dashboard</Link>
        </li>
        <li>
          <Link to="/user/articles">Articles</Link>
        </li>
        <li>
          <Link to="/user/welcome">Item</Link>
        </li>
        <li>
          <Link to="/user/welcome">Item</Link>
        </li>
      </ul>
    </aside>
  );
}
