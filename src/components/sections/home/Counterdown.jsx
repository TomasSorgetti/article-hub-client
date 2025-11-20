import Image from "../../ui/Image";
import Label from "../../ui/Label";
import Rocket from "../../../assets/images/home/counterdown.webp";

export default function Counterdown() {
  return (
    <section className="container mx-auto mt-20 border border-border rounded-2xl bg-background flex items-center justify-between overflow-hidden">
      <div className="flex flex-col items-start justify-center py-16 pl-32">
        <Label variant="secondary" className="bg-secondary/15">
          Coming soon
        </Label>
        <h2 className="text-6xl">
          Low code <span className="text-secondary">Integrations</span>
        </h2>
        <p className="my-6 max-w-md text-lg text-font-secondary">
          Create, edit, and publish articles with a powerful editor designed to
          structure and share knowledge easily.
        </p>
        <p className="text-7xl font-semibold">241 : 00 : 00 : 00</p>
      </div>
      <Image src={Rocket} alt="rocket launcher preparing to launch" />
    </section>
  );
}
