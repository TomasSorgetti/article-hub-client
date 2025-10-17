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
          <h1 className="text-5xl font-bold max-w-2xl">
            Plans that help your blog rank and reach more readers
          </h1>
          <p className="mt-4 text-font-secondary text-lg max-w-md">
            Get the right tools to publish SEO-friendly articles, analyze
            performance, and grow your online presence. All in one platform.
          </p>
        </div>

        <PricingCarousel
          loading={loading}
          plans={plans}
          isAuthenticated={isAuthenticated}
        />

        <small className="relative z-20 -translate-y-30 block text-center text-base text-font-secondary">
          Try it risk-free. Cancel anytime.
        </small>
      </main>
    </PublicLayout>
  );
}
