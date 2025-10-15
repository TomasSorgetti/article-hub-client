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
      <main className="mt-32 container mx-auto">
        <div className="relative text-center z-20 translate-y-20 flex flex-col items-center gap-2">
          <h1 className="text-5xl font-bold max-w-xl">
            Choose your perfect plan to grow your business
          </h1>
          <p className="mt-4 text-font-secondary text-lg max-w-md">
            Select the subscription plan that fits your goals, from starting
            your blog to scaling your content strategy with advanced SEO tools.
          </p>
        </div>

        <PricingCarousel
          loading={loading}
          plans={plans}
          isAuthenticated={isAuthenticated}
        />

        <small className="relative z-20 -translate-y-30 block text-center text-base text-font-secondary">
          Cancel or upgrade anytime. No hidden fees.
        </small>
      </main>
    </PublicLayout>
  );
}
