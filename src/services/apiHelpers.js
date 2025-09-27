export async function handleApiRequest(requestFn) {
  let data = null;
  let error = null;

  try {
    const res = await requestFn();
    data = res.data;
  } catch (err) {
    error =
      err?.response?.data?.error?.message ||
      err.message ||
      "Something went wrong";
  }

  return { data, error };
}
