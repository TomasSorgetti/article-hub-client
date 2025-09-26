import GoogleIcon from "../../../assets/icons/google.svg";
import Image from "../Image";

export default function GoogleLink({ children }) {
  return (
    <a
      href="#"
      className="relative w-full bg-white min-h-14 flex items-center justify-start gap-2 px-2 text-background text-sm font-normal rounded-xs"
    >
      <Image src={GoogleIcon} alt="" />
      {children}
    </a>
  );
}
