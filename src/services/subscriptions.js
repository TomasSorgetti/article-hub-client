import { privateApi } from "./api";
import { handleApiRequest } from "./apiHelpers";

export async function SuscribeToProPlan(planId) {
  return handleApiRequest(() =>
    privateApi.post(`/subscriptions/checkout`, { planId })
  );
}

export async function VerifySession(sessionId) {
  return handleApiRequest(() =>
    privateApi.post(`/subscriptions/verify-session`, { sessionId })
  );
}
