import UserLayout from "../../../../layouts/UserLayout";
import { SuscribeToProPlan } from "../../../../services/subscriptions";

export default function BillingPlansPage() {
  const handleClick = async () => {
    try {
      const planId = "68cdd413217f9ea3b63e181e";
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
        <div className="mt-32">
          <button
            onClick={handleClick}
            className="cursor-pointer bg-white px-8 py-2 rounded text-black font-bold"
          >
            Upgrade Plan to Pro
          </button>
        </div>
      </main>
    </UserLayout>
  );
}
