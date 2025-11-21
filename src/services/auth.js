import { privateApi } from "./api";
import { handleApiRequest } from "./apiHelpers";

export function SignInUser({ email, password, rememberme }) {
  return handleApiRequest(() =>
    privateApi.post(`/auth/login`, { email, password, rememberme })
  );
}

export function SignUpUser({ username, email, password }) {
  return handleApiRequest(() =>
    privateApi.post(`/auth/register`, { username, email, password })
  );
}

export function VerifyEmail(token) {
  return handleApiRequest(() =>
    privateApi.post(`/auth/verify-email?token=${token}`)
  );
}

export function ResendVerification() {
  throw new Error("Not implemented");
}

export function SignOutUser() {
  return handleApiRequest(() => privateApi.post(`/auth/logout`));
}

export function getProfile() {
  return handleApiRequest(() => privateApi.get(`/users/me`));
}

export function GoogleSignInUser({ idToken, rememberme }) {
  return handleApiRequest(() =>
    privateApi.post(`/auth/google`, { idToken, rememberme })
  );
}
