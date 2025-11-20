import CustomInput from "../../components/ui/forms/CustomInput";
import PublicLayout from "../../layouts/PublicLayout";
import EmailIcon from "../../assets/icons/email.svg";
import PasswordIcon from "../../assets/icons/password.svg";
import CustomForm from "../../components/ui/forms/CustomForm";
import GoogleLink from "../../components/ui/buttons/GoogleLink";
import CustomCheck from "../../components/ui/forms/CustomCheck";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import FormButton from "../../components/ui/buttons/FormButton";
import { useState } from "react";
import { useAuthStore } from "../../lib/store/auth";

export default function LoginPage() {
  const { login, loading, googleLogin } = useAuthStore();

  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const redirect = searchParams.get("redirect");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [rememberme, setRememberme] = useState(false);
  const [errorResponse, setErrorResponse] = useState("");

  const handleChange = (event) => {
    setErrorResponse("");
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheck = (event) => {
    setRememberme(event.target.checked);
  };

  const handleBlur = () => {};

  // Email Login
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await login({
      email: form.email,
      password: form.password,
      rememberme,
    });

    if (response.success) {
      navigate(redirect || "/user/welcome");
    } else {
      setErrorResponse(response.error || "Login failed");
    }
  };

  const handleGoogleSuccess = async (tokenResponse) => {
    const idToken = tokenResponse?.credential;

    if (!idToken) {
      setErrorResponse("No ID token received from Google");
      return;
    }

    const { success } = await googleLogin({ idToken, rememberme });
    if (success) {
      navigate(redirect || "/user/welcome");
    } else {
      setErrorResponse("Google authentication failed");
    }
  };

  const handleGoogleError = (err) => {
    console.error(err);
    setErrorResponse("Google login error");
  };

  return (
    <PublicLayout
      title="Log In | Article Hub"
      description="Access your Article Hub dashboard to manage your articles, integrations, and analytics — fast, simple, and secure."
    >
      <main className="my-20">
        <CustomForm handleSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Sign in</h1>
          <p className="text-font-secondary">
            We´ll get you up and running so you can verify your personal
            information and customize your account.
          </p>

          <GoogleLink
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          >
            Continue with Google
          </GoogleLink>

          <div className="text-center text-font-secondary mt-2">
            or
            <span className="sr-only">sign in with</span>
          </div>

          <div className="relative">
            <small className="text-red-500 text-sm absolute w-full text-center">
              {errorResponse}
            </small>
          </div>

          <CustomInput
            id="email"
            type="email"
            name="email"
            label="Email:"
            value={form.email}
            icon={EmailIcon}
            placeholder="abc@xyz.com"
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <CustomInput
            id="password"
            type="password"
            name="password"
            label="Password:"
            value={form.password}
            icon={PasswordIcon}
            placeholder="********"
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="flex items-center justify-between w-full mt-4">
            <CustomCheck id="remember-me" handleChange={handleCheck}>
              Remember me
            </CustomCheck>
            <NavLink
              to="/forgot-password"
              className="italic text-sm text-font-secondary"
            >
              Forgot password?
            </NavLink>
          </div>

          <FormButton disabled={loading} className="mt-4">
            Sign In
          </FormButton>

          <small className="text-base text-center mt-4">
            You don´t have an account?{" "}
            <NavLink
              to="/auth/register"
              className="text-primary hover:underline"
            >
              Register here
            </NavLink>
          </small>
        </CustomForm>
      </main>
    </PublicLayout>
  );
}
