export default function CustomForm({ children, handleSubmit, className }) {
  return (
    <form
      onSubmit={handleSubmit}
      className={`relative border border-border p-8 min-h-[32rem] ${className}`}
    >
      {children}

      <div className="absolute -top-[1px] -left-[1px] w-5 h-5 border-l border-t border-white"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-5 h-5 border-l border-b border-white"></div>
      <div className="absolute -top-[1px] -right-[1px] w-5 h-5 border-r border-t border-white"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-5 h-5 border-r border-b border-white"></div>
    </form>
  );
}
