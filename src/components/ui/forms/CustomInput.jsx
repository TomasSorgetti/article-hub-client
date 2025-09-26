import Image from "../Image";
import EyeIcon from "../../../assets/icons/eye.svg";
import EyeOffIcon from "../../../assets/icons/eye-off.svg";
import { useState } from "react";

export default function CustomInput({
  label,
  type = "text",
  name,
  value,
  placeholder,
  icon = null,
  error,
  ...props
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword
    ? isPasswordVisible
      ? "text"
      : "password"
    : type;

  return (
    <div className="w-full flex flex-col items-start gap-2">
      <label htmlFor={name}>{label}</label>
      <div className="relative w-full">
        {icon && (
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <Image src={icon} alt={name + " icon"} />
          </div>
        )}
        {isPassword && (
          <button
            type="button"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2"
          >
            <Image
              src={isPasswordVisible ? EyeOffIcon : EyeIcon}
              alt="eye icon"
            />
          </button>
        )}
        <input
          type={inputType}
          name={name}
          value={value}
          placeholder={placeholder}
          {...props}
          className={`border border-border min-h-12 py-2 px-4 w-full placeholder:text-font-secondary hover:border-font-secondary focus:border-font-secondary ${
            icon && "pl-18"
          }`}
        />
        {error && <small className="text-red-500">{error}</small>}
        <div className="absolute -top-0 -left-0 w-3 h-3 border-l border-t border-white"></div>
        <div className="absolute -bottom-0 -left-0 w-3 h-3 border-l border-b border-white"></div>
        <div className="absolute -top-0 -right-0 w-3 h-3 border-r border-t border-white"></div>
        <div className="absolute -bottom-0 -right-0 w-3 h-3 border-r border-b border-white"></div>
      </div>
    </div>
  );
}
