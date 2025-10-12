import { useState } from "react";
import PricingCarousel from "../../../../components/ui/carousels/PricingCarousel";
import UserLayout from "../../../../layouts/UserLayout";
import { SuscribeToProPlan } from "../../../../services/subscriptions";

export default function BillingPlansPage() {
  const [loading, setLoading] = useState(false);

  const handleChangePlan = async (planId, isActualPlan) => {
    if (isActualPlan) return;

    setLoading(true);

    try {
      const { data, error } = await SuscribeToProPlan(planId);
      console.log(data, error);
      if (data?.data?.url) {
        window.location.href = data.data.url;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserLayout title="Billing Plans Page" description="Billing Plans Page">
      <main className="mt-20 container mx-auto">
        <div className="relative text-center z-20 translate-y-20">
          <h1 className="text-5xl font-bold ">Select your plan</h1>
          <p className="mt-4 text-font-secondary ">
            Select the plan that best suits your needs.
          </p>
        </div>
        <PricingCarousel
          handleChangePlan={handleChangePlan}
          loading={loading}
        />
        <small className="relative z-20 -translate-y-30 block text-center text-base text-font-secondary">
          Cancel anytime for free.
        </small>
      </main>
    </UserLayout>
  );
}
