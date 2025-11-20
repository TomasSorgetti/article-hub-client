import CustomInput from "../../components/ui/forms/CustomInput";
import PublicLayout from "../../layouts/PublicLayout";
import UserIcon from "../../assets/icons/user.svg";
import EmailIcon from "../../assets/icons/email.svg";
import PasswordIcon from "../../assets/icons/password.svg";
import CustomForm from "../../components/ui/forms/CustomForm";
import GoogleLink from "../../components/ui/buttons/GoogleLink";
import CustomCheck from "../../components/ui/forms/CustomCheck";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import FormButton from "../../components/ui/buttons/FormButton";
import { useAuthStore } from "../../lib/store/auth";
import { useState } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { googleLogin } = useAuthStore();
  const [errorResponse, setErrorResponse] = useState("");

  const searchParams = new URLSearchParams(location.search);
  const redirect = searchParams.get("redirect");

  const handleChange = () => {
    console.log("Handle Change");
  };
  const handleBlur = () => {
    console.log("Handle Blur");
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (redirect) {
      navigate(`/auth/login?redirect=${redirect}`);
    }
  };

  const handleGoogleSuccess = async (tokenResponse) => {
    const idToken = tokenResponse?.credential;
    const rememberme = false;

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
      title="Sign Up | Article Hub – Start your blog in minutes"
      description="Create your free Article Hub account and start publishing articles with API access. Build your own blog and manage everything from one clean, intuitive platform."
    >
      <CustomForm handleSubmit={handleSubmit} className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-font-secondary">
          We´ll get you up and running so you can verify your personal
          information and customize your account.
        </p>

        <GoogleLink onSuccess={handleGoogleSuccess} onError={handleGoogleError}>
          Continue with Google
        </GoogleLink>

        <div className="text-center text-font-secondary mt-2">
          or
          <span className="sr-only">sign up with</span>
        </div>

        <div className="relative">
          <small className="text-red-500 text-sm absolute w-full text-center">
            {errorResponse}
          </small>
        </div>

        <CustomInput
          id="username"
          type="username"
          name="username"
          label="Username:"
          icon={UserIcon}
          placeholder="John Doe"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <CustomInput
          id="email"
          type="email"
          name="email"
          label="Email:"
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
          icon={PasswordIcon}
          placeholder="********"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <CustomCheck id="terms" handleChange={() => {}} className="mt-4">
          Acept terms and conditions
        </CustomCheck>

        <FormButton className="mt-4">Sign Up</FormButton>

        <small className="text-base text-center mt-4">
          Allready have an account?{" "}
          <NavLink
            to={redirect ? `/auth/login?redirect=${redirect}` : "/auth/login"}
            className="text-primary hover:underline"
          >
            Login here
          </NavLink>
        </small>
      </CustomForm>
    </PublicLayout>
  );
}
