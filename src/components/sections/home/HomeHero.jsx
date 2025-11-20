import { Link } from "react-router-dom";
import CtaButton from "../../ui/buttons/CtaButton";
import Label from "../../ui/Label";
import Background from "../../../assets/images/home/hero_bg.webp";
import Image from "../../ui/Image";

export default function HomeHero() {
  return (
    <section className="relative h-screen overflow-hidden text-center flex flex-col items-center justify-center">
      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        <Label variant="primary" className="uppercase bg-primary/30">
          Your content, wherever you need it
        </Label>
        <h1 className="text-6xl font-light max-w-[720px] leading-17">
          Build, collaborate, and{" "}
          <span className="text-primary">scale without limits.</span>
        </h1>
        <p className="text-font-secondary max-w-[450px] text-lg">
          Organize projects, share ideas, and grow your business with a flexible
          workspace designed for modern teams.
        </p>
        <div className="flex gap-6 items-center justify-center">
          <CtaButton to="/auth/register">Get Started</CtaButton>
          <Link to="/docs" className="text-font-secondary">
            Learn how it works
          </Link>
        </div>
      </div>

      <Image
        src={Background}
        alt="background"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
      />
    </section>
  );
}
