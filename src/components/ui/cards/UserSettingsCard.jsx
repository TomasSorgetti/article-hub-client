export default function UserSettingsCard({
  title,
  description,
  cta = "Change password",
  handleClick = () => {},
}) {
  return (
    <div className="w-full rounded-xl flex items-center justify-between p-6 border border-border">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="text-font-secondary max-w-md">{description}</p>
      </div>
      <button
        onClick={handleClick}
        className="bg-white cursor-pointer rounded h-12 flex items-center justify-center w-full max-w-xs text-background font-semibold"
      >
        {cta}
      </button>
    </div>
  );
}
