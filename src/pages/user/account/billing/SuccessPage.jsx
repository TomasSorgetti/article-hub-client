import { useEffect, useState } from "react";
import UserLayout from "../../../../layouts/UserLayout";
import { VerifySession } from "../../../../services/subscriptions";
import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = new URLSearchParams(location.search);
  const sessionId = searchParams.get("session_id");
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionId) {
      async function Checkout() {
        try {
          const { data, error } = await VerifySession(sessionId);
          if (error) throw new Error(error);

          console.log(data);

          setLoading(false);
          navigate("/user/account/billing");
        } catch (err) {
          console.error(err);
          setError(err.message);
          setLoading(false);
        }
      }
      Checkout();
    }
  }, [sessionId, navigate]);

  if (loading)
    return (
      <UserLayout title="Verifying...">
        <p>Verificando tu suscripción...</p>
      </UserLayout>
    );
  if (error)
    return (
      <UserLayout title="Error">
        <p>Error: {error}</p>
      </UserLayout>
    );

  return (
    <UserLayout title="Success">
      <h1>¡Suscripción completada!</h1>
      <p>Tu plan ha sido actualizado correctamente.</p>
    </UserLayout>
  );
}
