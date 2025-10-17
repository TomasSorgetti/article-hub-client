import MemberList from "../MemberList";
import video from "../../../assets/videos/3.mp4";

export default function WorkbenchCardTest({
  id,
  title = "",
  description = "We´ll get you up and running so you can verify your personal information and customize your account we get you up and running.",
  members = [],
  owner,
  // role = "user",
  //   isArchived = false,
  createdAt,
  //   settings,
}) {
  return (
    <a
      href={`/user/articles/${id}`}
      className={`relative z-10 w-full max-w-[22.5rem] h-[12rem] group hover:scale-105 hover:h-[16.5rem] transition-all duration-300 `}
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
        <p className="flex-1 mt-6 h-0 text-font-secondary opacity-0 group-hover:opacity-100 group-hover:h-auto duration-0">
          {description}
        </p>

        {/* footer */}
        <div className="flex justify-between items-center w-full">
          <time className="text-sm text-font-secondary">
            {new Date(createdAt).toDateString()}
          </time>

          <MemberList members={members} />
        </div>
      </div>

      <div className="opacity-0 group-hover:opacity-100 duration-300 absolute -left-35 -top-52 rotate-90 pointer-events-none select-none rounded-[inherit] -z-20 aspect-[0.925925] w-[42rem]">
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
    </a>
  );
}
