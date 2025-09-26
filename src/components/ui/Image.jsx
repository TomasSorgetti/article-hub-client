import { useState } from "react";

export default function Image({
  src,
  alt,
  draggable = false,
  loading = "lazy",
  placeholder = "blur",
  className = "",
  ...props
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        draggable={draggable}
        loading={loading}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />

      {placeholder === "blur" && !loaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse blur-md" />
      )}
    </div>
  );
}
