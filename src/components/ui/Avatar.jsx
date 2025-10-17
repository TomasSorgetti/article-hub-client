export default function Avatar({
  avatar,
  alt = "",
  handleClick,
  className = "",
}) {
  return (
    <div
      onClick={handleClick}
      className={`size-12 rounded-full overflow-hidden border border-border cursor-pointer ${className}`}
    >
      {avatar ? (
        <img
          src={`http://localhost${avatar}`}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        //   todo => default image
        <div className="bg-gray-600"></div>
      )}
    </div>
  );
}
