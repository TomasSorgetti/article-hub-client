import { privateApi } from "./api";
import { handleApiRequest } from "./apiHelpers";

export function UpdateProfile(formData) {
  return handleApiRequest(() =>
    privateApi.patch(`/users/me`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );
}
