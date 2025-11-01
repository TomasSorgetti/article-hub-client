import CustomCard from "../../ui/cards/CustomCard";
import Label from "../../ui/Label";
import Image from "../../ui/Image";
import Flexible from "../../../assets/images/home/flexible.webp";
import Simple from "../../../assets/images/home/simple.webp";
import Secure from "../../../assets/images/home/secure.webp";
import Content from "../../../assets/images/home/content.webp";

export default function HomeBento() {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <CustomCard className="min-h-105 md:col-span-2 lg:p-12">
        <h2 className="text-font-primary text-5xl max-w-160">
          Retrieve your posts from{" "}
          <span className="text-primary">any website</span>
        </h2>
        <p className="text-font-secondary text-lg mt-10 max-w-136">
          Generate an API Key and display your articles (portfolios, blogs,
          websites) in JSON with authentication and plan-based limits.
        </p>
      </CustomCard>

      <CustomCard className="min-h-105 md:col-span-1 lg:p-12">
        <h2 className="text-font-primary text-5xl">
          Collaborative <span className="text-primary">Workspaces</span>
        </h2>
        <p className="text-font-secondary text-lg mt-10">
          Organize your projects in workbenches, invite your team, and work
          together in a shared, flexible environment.
        </p>
      </CustomCard>

      <CustomCard className="min-h-105 md:col-span-3 flex justify-between">
        <div className="lg:pl-12 lg:py-12">
          <h2 className="text-font-primary text-5xl max-w-120">
            Content & <span className="text-primary">article management</span>
          </h2>
          <p className="text-font-secondary text-lg max-w-132 mt-10">
            Create, edit, and publish articles with a powerful editor designed
            to structure and share knowledge easily.
          </p>
        </div>
        <Image
          src={Content}
          alt="blog saas content managenmentcircuit"
          className="h-full w-auto min-w-1/2"
        />
      </CustomCard>

      {/* Three Cards */}
      <CustomCard className="min-h-168 md:col-span-1">
        <div className="p-8">
          <Label
            variant="secondary"
            className="bg-linearr-to-b from-secondary/30 to-secondary/10"
          >
            Api Key
          </Label>
          <h2 className="text-secondary text-2xl my-4">
            Flexible Subscription
          </h2>
          <p className="text-font-secondary text-lg">
            Start with a free plan and scale as your team grows, paying only for
            what you really need.
          </p>
        </div>
        <Image src={Flexible} alt="" className="w-full h-full" />
      </CustomCard>

      <CustomCard className="min-h-168 md:col-span-1">
        <div className="p-8">
          <Label
            variant="tertiary"
            className="bg-linear-to-b from-tertiary/30 to-tertiary/10"
          >
            Api Key
          </Label>
          <h2 className="text-tertiary text-2xl my-4">Simple Integrations</h2>
          <p className="text-font-secondary text-lg">
            Connect with your favorite tools like GitHub or Slack to centralize
            your workflow.
          </p>
        </div>
        <Image src={Simple} alt="" className="w-full h-full" />
      </CustomCard>

      <CustomCard className="min-h-168 md:col-span-1">
        <div className="p-8">
          <Label
            variant="primary"
            className="bg-linear-to-b from-primary/30 to-primary/10"
          >
            Api Key
          </Label>
          <h2 className="text-primary text-2xl my-4">
            Secure & Reliable Design
          </h2>
          <p className="text-font-secondary text-lg">
            Modern authentication, two-factor verification, and data encryption
            to keep your account and team safe.
          </p>
        </div>
        <Image src={Secure} alt="" className="w-full h-full" />
      </CustomCard>
    </section>
  );
}
