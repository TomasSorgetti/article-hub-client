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
  const isTextarea = type === "textarea";

  const inputType = isPassword
    ? isPasswordVisible
      ? "text"
      : "password"
    : type;

  return (
    <div className="relative w-full flex flex-col items-start gap-2 mb-1">
      <label htmlFor={name}>{label}</label>

      <div className="relative w-full">
        {!isTextarea && icon && (
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <Image src={icon} alt={name + " icon"} />
          </div>
        )}

        {!isTextarea && isPassword && (
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

        {isTextarea ? (
          <textarea
            name={name}
            value={value}
            placeholder={placeholder}
            {...props}
            className={`border py-2 -mb-2 px-4 w-full min-h-30 placeholder:text-font-secondary resize-none ${
              error
                ? "border-red-400 bg-red-500/5"
                : "border-border hover:border-font-secondary focus:border-font-secondary"
            }`}
          ></textarea>
        ) : (
          <input
            type={inputType}
            name={name}
            value={value}
            placeholder={placeholder}
            {...props}
            className={`border min-h-12 py-2 px-4 w-full placeholder:text-font-secondary ${
              icon && "pl-18"
            } ${
              error
                ? "border-red-400 bg-red-500/5"
                : "border-border hover:border-font-secondary focus:border-font-secondary"
            }`}
          />
        )}

        <div
          className={`absolute top-0 left-0 w-3 h-3 border-l border-t ${
            error ? "border-red-500" : "border-white"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-3 h-3 border-l border-b ${
            error ? "border-red-500" : "border-white"
          }`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-3 h-3 border-r border-t ${
            error ? "border-red-500" : "border-white"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-3 h-3 border-r border-b ${
            error ? "border-red-500" : "border-white"
          }`}
        ></div>
      </div>

      {error && (
        <small className="text-red-500 absolute -bottom-5">{error}</small>
      )}
    </div>
  );
}
