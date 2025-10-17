import Selector from "../Selector";

export default function TwoFactorAuthCard() {
  const handleChange = () => {};

  return (
    <div className="w-full rounded-xl flex items-center justify-between p-6 border border-border">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-2xl flex items-center gap-4">
          Autenticación en dos pasos{" "}
          <span className="text-xs text-background bg-font-primary px-2 py-1 rounded-full">
            Recommended
          </span>
        </h3>
        <p className="text-font-secondary max-w-sm">
          Al activarlo se requerirá doble autenticación con un código MFA.
        </p>
      </div>
      <Selector handleChange={handleChange} />
    </div>
  );
}
