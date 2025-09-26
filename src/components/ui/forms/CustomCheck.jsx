export default function CustomCheck({
  children,
  id,
  handleChange,
  className,
  ...props
}) {
  return (
    <div className={`flex items-center gap-2 text-font-secondary ${className}`}>
      <input
        id={id}
        type="checkbox"
        className="w-4 h-4"
        onChange={handleChange}
        {...props}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}
