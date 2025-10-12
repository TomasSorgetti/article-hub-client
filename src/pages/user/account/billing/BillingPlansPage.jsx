import PricingCard from "../../../../components/ui/cards/PricingCard";
import UserLayout from "../../../../layouts/UserLayout";
import { SuscribeToProPlan } from "../../../../services/subscriptions";

export default function BillingPlansPage() {
  const handleClick = async (planId, isActualPlan) => {
    if (isActualPlan) return;
    try {
      const { data, error } = await SuscribeToProPlan(planId);
      console.log(data, error);
      if (data?.data?.url) {
        window.location.href = data.data.url;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserLayout title="Billing Plans Page" description="Billing Plans Page">
      <main className="mt-32 container mx-auto">
        <h1>Billing Plans Page</h1>

        <div className="mt-32 flex justify-center gap-4 w-full">
          <PricingCard
            id="68cdd413217f9ea3b63e181e"
            name="Free Plan"
            price="$0"
            items={[
              "3 Workbenches",
              "3 Collaborators",
              "1 API Key",
              "500 MB Storage",
            ]}
            isActualPlan={true}
            handleClick={handleClick}
          />
          <PricingCard
            id="68cdd413217f9ea3b63e181e"
            name="Pro Plan"
            price="$10"
            popular
            items={[
              "3 Workbenches",
              "3 Collaborators",
              "1 API Key",
              "500 MB Storage",
            ]}
            isActualPlan={false}
            handleClick={handleClick}
          />
          <PricingCard
            id="68cdd413217f9ea3b63e1821"
            name="Premium Plan"
            price="$0"
            items={[
              "3 Workbenches",
              "3 Collaborators",
              "1 API Key",
              "500 MB Storage",
            ]}
            isActualPlan={false}
            handleClick={handleClick}
          />
        </div>
      </main>
    </UserLayout>
  );
}
