import CustomInput from "../../components/ui/forms/CustomInput";
import PublicLayout from "../../layouts/PublicLayout";
import EmailIcon from "../../assets/icons/email.svg";
import PasswordIcon from "../../assets/icons/password.svg";
import CustomForm from "../../components/ui/forms/CustomForm";
import GoogleLink from "../../components/ui/buttons/GoogleLink";
import GithubLink from "../../components/ui/buttons/GithubLink";
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

  const handleGoogleLogin = async ({ credential }) => {
    console.log("ID Token:", credential);
    const { success } = await googleLogin({
      idToken: credential,
      rememberme,
    });
    if (success) navigate(redirect || "/user/welcome");
  };

  return (
    <PublicLayout
      title="Log In | Article Hub"
      description="Access your Article Hub dashboard to manage your articles, integrations, and analytics — fast, simple, and secure."
    >
      <CustomForm
        handleSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-120 mx-auto mt-32"
      >
        <h1 className="text-3xl font-bold">Sign in</h1>
        <p className="text-font-secondary">
          We´ll get you up and running so you can verify your personal
          information and customize your account.
        </p>

        <div className="flex gap-4 items-center w-full">
          <GoogleLink
            handleSuccess={handleGoogleLogin}
            handleError={(err) => console.error("Google login error:", err)}
          />
          <GithubLink>Sign in with GitHub</GithubLink>
        </div>

        <small className="text-red-500 text-sm min-h-5">{errorResponse}</small>

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
          <NavLink to="/auth/register" className="text-primary hover:underline">
            Register here
          </NavLink>
        </small>
      </CustomForm>
    </PublicLayout>
  );
}
