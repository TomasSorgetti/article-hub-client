import { Link } from "react-router-dom";
import CtaButton from "../../ui/buttons/CtaButton";

export default function HomeHero() {
  return (
    <section className="h-screen text-center flex flex-col items-center justify-center gap-6">
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
    </section>
  );
}
