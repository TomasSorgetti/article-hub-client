import { useGoogleLogin as useGoogleLoginLib } from "@react-oauth/google";

export function useGoogleLogin({ onSuccess, onError }) {
  const login = useGoogleLoginLib({
    onSuccess,
    onError,
    flow: "implicit",
  });

  return { prompt: login };
}
