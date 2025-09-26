import { useEffect } from "react";

export default function useClickOutside(
  ref,
  callback,
  { closeOnEsc = true } = {}
) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        callback();
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    if (closeOnEsc) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      if (closeOnEsc) {
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [ref, callback, closeOnEsc]);
}
