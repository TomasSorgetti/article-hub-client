import AnimatedBackground from "../AnimatedBackground";
import MemberList from "../MemberList";
import { Link } from "react-router-dom";

export default function WorkbenchCardTest({
  id,
  title = "",
  description = "",
  members = [],
  owner,
  // role = "user",
  //   isArchived = false,
  createdAt,
  //   settings,
}) {
  return (
    <div className="relative w-full max-w-90 h-48 overflow-hidden border border-border/40 hover:border-border/60 rounded-2xl group">
      <Link
        to={`/user/${id}/articles`}
        className={`relative z-20 flex flex-col items-start justify-between w-full h-full cursor-pointer p-4 rounded-2xl pointer-events-auto`}
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
        <p className="flex-1 mt-2 text-font-secondary">{description}</p>

        {/* footer */}
        <div className="flex justify-between items-center w-full">
          <time className="text-sm text-font-secondary">
            {new Date(createdAt).toDateString()}
          </time>

          <MemberList members={members} />
        </div>
      </Link>
    </div>
  );
}
