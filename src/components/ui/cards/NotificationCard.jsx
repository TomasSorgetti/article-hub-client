export default function NotificationCard({
  id,
  message,
  link,
  isRead = false,
  isLastItem = false,
  removeNotification = () => {},
}) {
  const Wrapper = link ? "a" : "div";

  const handleDelete = (e) => {
    e.stopPropagation();
    e.preventDefault();
    removeNotification(id);
  };

  return (
    <div
      id={`notification-${id}`}
      className={`p-2 min-h-14 flex items-center justify-start gap-3 hover:bg-border/30 ${
        isLastItem ? "" : "border-b border-border/50"
      }`}
    >
      {/* read indicator */}
      <div
        className={`w-1.5 h-1.5 rounded-full ${
          isRead ? "bg-font-secondary/50" : "bg-primary"
        }`}
      ></div>

      {/* content */}
      <div className="w-full flex items-center justify-between gap-2">
        <Wrapper
          href={link}
          className={`text-sm h-full ${
            isRead ? "text-font-secondary" : "text-font-primary"
          }`}
        >
          {message}
        </Wrapper>

        {/* delete button */}
        <button
          type="button"
          onClick={handleDelete}
          className="text-font-secondary cursor-pointer"
        >
          x
        </button>
      </div>
    </div>
  );
}
