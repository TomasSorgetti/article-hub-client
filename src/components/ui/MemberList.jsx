import Avatar from "./Avatar";

export default function MemberList({
  members = [],
  maxVisible = 4,
  showOverflow = true,
}) {
  const visibleMembers = members.slice(0, maxVisible);
  const overflowCount = members.length - maxVisible;

  return (
    <ul className="flex -space-x-2 relative">
      {visibleMembers.map((member, index) => (
        <li
          key={member.user.id || index}
          className="z-[${index}]"
          style={{ zIndex: visibleMembers.length - index }}
        >
          <Avatar
            avatar={member.user.avatar}
            alt={member.user.username}
            className="size-10"
          />
        </li>
      ))}
      {/* Contador de overflow */}
      {showOverflow && overflowCount > 0 && (
        <li className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/20 bg-card flex items-center justify-center text-white text-xs font-bold z-10 relative">
          <span>+{overflowCount}</span>
        </li>
      )}
    </ul>
  );
}
