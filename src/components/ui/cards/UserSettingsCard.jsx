export default function UserSettingsCard({
  title,
  description,
  href,
  cta = "Change password",
}) {
  return (
    <div className="w-full rounded-xl flex items-center justify-between p-6 border border-border">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="text-font-secondary max-w-md">{description}</p>
      </div>
      <a
        href={href}
        className="bg-white rounded h-12 flex items-center justify-center w-full max-w-xs text-background font-semibold"
      >
        {cta}
      </a>
    </div>
  );
}
