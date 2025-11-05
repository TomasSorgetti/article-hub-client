// GoogleLink.jsx (versión final)
import { GoogleLogin } from "@react-oauth/google";
import GoogleIcon from "../../../assets/icons/google.svg";
import Image from "../Image";
import { useRef } from "react";

export default function GoogleLink({
  children,
  onSuccess,
  onError,
  className = "",
  ...rest
}) {
  const googleBtnRef = useRef(null);

  const handleClick = () => {
    googleBtnRef.current?.querySelector("div[role=button]")?.click();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Continue with Google"
      className={`flex items-center justify-center gap-6 w-full bg-white text-black/70 min-h-12 text-base font-semibold cursor-pointer rounded border border-gray-300 transition-colors ${className}`.trim()}
      {...rest}
    >
      <Image src={GoogleIcon} alt="" className="w-8 h-8" />
      {children}

      <div ref={googleBtnRef} className="hidden">
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
          useOneTap={false}
          flow="implicit"
          ux_mode="popup"
          auto_select
        />
      </div>
    </button>
  );
}
