import GithubIcon from "../../../assets/icons/github.svg";
import Image from "../Image";

export default function GithubLink({ children }) {
  return (
    <a
      href="#"
      className="duration-300 ease-in-out w-full border border-border min-h-14 text-font-secondary hover:border-font-secondary hover:text-font-primary px-2 flex items-center gap-2 text-sm cursor-pointer"
    >
      <Image src={GithubIcon} alt="" className="w-10 h-10" />
      {children}
    </a>
  );
}
