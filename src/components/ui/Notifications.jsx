import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { useNotificationsStore } from "../../lib/store/notifications";
import { Link } from "react-router-dom";

export default function Notifications() {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const { items, total, loading } = useNotificationsStore();

  const toggleDropdown = async () => {
    setIsOpen((prev) => !prev);
  };

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={toggleDropdown}
        className="relative p-2 rounded-full cursor-pointer hover:bg-border/60 active:bg-border/80"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            d="m13.497 4.898.053.8.694.4C15.596 6.878 16.5 8.334 16.5 10v2.892c0 .997.27 1.975.784 2.83L18.35 17.5H5.649l1.067-1.778c.513-.855.784-1.833.784-2.83V10c0-1.666.904-3.122 2.256-3.902l.694-.4.053-.8c.052-.78.703-1.398 1.497-1.398.794 0 1.445.618 1.497 1.398ZM6 10c0-2.224 1.21-4.165 3.007-5.201C9.11 3.236 10.41 2 12 2c1.59 0 2.89 1.236 2.993 2.799C16.79 5.835 18 7.776 18 10v2.892c0 .725.197 1.436.57 2.058l1.521 2.535c.4.667-.08 1.515-.857 1.515H15c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879s-1.559-.316-2.121-.879C9.316 20.56 9 19.796 9 19H4.766c-.777 0-1.257-.848-.857-1.515L5.43 14.95c.373-.622.57-1.333.57-2.058V10Zm4.5 9c0 .398.158.78.44 1.06.28.282.662.44 1.06.44s.78-.158 1.06-.44c.282-.28.44-.662.44-1.06h-3Z"
            fillRule="evenodd"
          ></path>
        </svg>

        {total > 0 && (
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full border-2 border-background">
            {total}
          </span>
        )}
      </button>

      <ul
        className={`absolute top-12 right-0 w-74 space-y-1 p-2 bg-background border border-border rounded-md shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {loading && <li className="p-2">Loading...</li>}

        {!loading && total === 0 && (
          <li className="p-2">
            <p>There are no notifications.</p>
          </li>
        )}

        {!loading &&
          items.map((notification, index) => {
            return (
              <li
                key={notification._id}
                className={`p-2 flex items-center justify-between hover:bg-border/20 ${
                  notification.read
                    ? "text-font-secondary"
                    : "text-font-primary"
                }
                ${index !== items.length - 1 ? "border-b border-border/50" : ""}
                  `}
              >
                <p>{notification.message}</p>
                {notification.link && (
                  <Link
                    href={`/user${notification.link}`}
                    rel="noreferrer"
                    className="text-sm"
                  >
                    View
                  </Link>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
