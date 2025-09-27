import { privateApi } from "./api";
import { handleApiRequest } from "./apiHelpers";

export async function GetMyNotifications() {
  return handleApiRequest(() => privateApi.get(`/notifications/me`));
}
