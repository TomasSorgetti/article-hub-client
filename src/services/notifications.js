import { privateApi } from "./api";

export async function GetMyNotifications() {
  let data = null;
  let error = null;

  try {
    data = await privateApi.get(`/notifications/me`);
  } catch (err) {
    error = err.response.data.error.message;
  }

  return { data: data?.data, error };
}
