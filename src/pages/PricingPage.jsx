import { useEffect } from "react";
import PublicLayout from "../layouts/PublicLayout";
import { usePlanStore } from "../lib/store/plans";
import { useAuthStore } from "../lib/store/auth";
import PricingCarousel from "../components/ui/carousels/PricingCarousel";

export default function PricingPage() {
  const { plans, fetchPlans, loading } = usePlanStore();

  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (plans.length === 0) {
      fetchPlans();
    }
  }, [plans.length, fetchPlans]);


  return (
    <PublicLayout title="Pricing Page" description="Pricing Page">
      <main className="mt-20 container mx-auto">
        <div className="relative text-center z-20 translate-y-20">
          <h1 className="text-5xl font-bold ">Select your plan</h1>
          <p className="mt-4 text-font-secondary ">
            Select the plan that best suits your needs.
          </p>
        </div>

        <PricingCarousel
          loading={loading}
          plans={plans}
          isAuthenticated={isAuthenticated}
        />

        <small className="relative z-20 -translate-y-30 block text-center text-base text-font-secondary">
          Cancel anytime for free.
        </small>
      </main>
    </PublicLayout>
  );
}
