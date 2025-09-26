import { privateApi } from "./api";

export async function SignInUser({ email, password, rememberme }) {
  let data = null;
  let error = null;

  try {
    data = await privateApi.post(`/auth/login`, {
      email,
      password,
      rememberme,
    });
  } catch (err) {
    error = err.response.data.error.message;
  }

  return { data: data?.data, error };
}

export async function SignOutUser() {
  let data = null;
  let error = null;

  try {
    data = await privateApi.post(`/auth/logout`);
  } catch (err) {
    console.log(err);

    error = err.response.data.error.message;
  }

  return { data: data?.data, error };
}
