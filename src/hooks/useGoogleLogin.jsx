import { useEffect } from "react";

export function useGoogleLogin({ onSuccess, onError, clientId }) {
  useEffect(() => {
    if (!window.google) return;

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: async (response) => {
        try {
          onSuccess(response);
        } catch (err) {
          onError(err);
        }
      },
    });
  }, [clientId, onSuccess, onError]);

  const prompt = () => {
    if (!window.google) return;
    window.google.accounts.id.prompt();
  };

  return { prompt };
}
