import MemberList from "../MemberList";

export default function WorkbenchCard({
  id,
  title = "",
  description = "",
  members = [],
  owner,
  // role = "user",
  isArchived = false,
  createdAt,
  //   settings,
}) {
  return (
    <a
      href={`/user/workbench/${id}`}
      className={`relative flex flex-col items-start w-full max-w-90 h-48 card-bg cursor-pointer p-4 rounded-2xl hover:shadow-lg hover:shadow-card ${
        isArchived ? "opacity-50" : ""
      }`}
    >
      <span className="absolute top-4 right-5">{members.length}</span>

      {/* Title */}
      <div>
        <small className="text-sm text-font-secondary italic">
          Owner: {owner.username}
        </small>
        <h2 className="font-bold text-2xl">{title}</h2>
      </div>

      {/* Description */}
      <p className="flex-1">{description}</p>

      {/* footer */}
      <div className="flex justify-between items-center w-full">
        <time className="text-sm text-font-secondary">
          {new Date(createdAt).toDateString()}
        </time>

        <MemberList members={members} />
      </div>
    </a>
  );
}
