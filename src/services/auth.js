import { privateApi } from "./api";
import { handleApiRequest } from "./apiHelpers";

export function SignInUser({ email, password, rememberme }) {
  return handleApiRequest(() =>
    privateApi.post(`/auth/login`, { email, password, rememberme })
  );
}

export function SignOutUser() {
  return handleApiRequest(() => privateApi.post(`/auth/logout`));
}

export function getProfile() {
  return handleApiRequest(() => privateApi.get(`/users/me`));
}
