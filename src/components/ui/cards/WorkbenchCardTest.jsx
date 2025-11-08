import MemberList from "../MemberList";
import video from "../../../assets/videos/3.mp4";
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
    <Link
      to={`/user/${id}/articles`}
      className={`relative z-30 w-full max-w-90 group hover:scale-[1.05] hover:z-0 h-66 transition-all duration-300 `}
    >
      <div className="relative z-10 border border-border bg-background/80 flex flex-col items-start w-full h-full cursor-pointer p-4 rounded-2xl group">
        <span className="absolute top-4 right-5">{members.length}</span>

        {/* Title */}
        <div>
          <small className="text-sm text-font-secondary italic">
            Owner: {owner.username}
          </small>
          <h2 className="font-bold text-2xl">{title}</h2>
        </div>

        {/* Description */}
        <p className="flex-1 mt-6 text-font-secondary">{description}</p>

        {/* footer */}
        <div className="flex justify-between items-center w-full">
          <time className="text-sm text-font-secondary">
            {new Date(createdAt).toDateString()}
          </time>

          <MemberList members={members} />
        </div>
      </div>

      <div className="opacity-0 group-hover:opacity-100 duration-300 absolute -left-35 -top-52 rotate-90 pointer-events-none select-none rounded-[inherit] -z-20 aspect-[0.925925] w-2xl">
        <div className="relative">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              className=" transition-opacity duration-500"
            />
          )}
          <div className="bg-circular absolute inset-0 w-full h-full object-cover rounded-[inherit]"></div>
        </div>
      </div>
    </Link>
  );
}
