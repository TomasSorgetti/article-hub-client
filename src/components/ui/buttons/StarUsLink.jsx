import GithubIcon from "../../../assets/icons/github.svg";
import Image from "../Image";

export default function StarUsLink() {
  return (
    <a
      href="https://github.com/TomasSorgetti/blog-saas"
      className="duration-300 ease-in-out text-font-secondary hover:text-font-primary p-2 flex items-center gap-2 text-sm"
      target="_blank"
    >
      <Image src={GithubIcon} alt="" />
      Star Us
    </a>
  );
}
