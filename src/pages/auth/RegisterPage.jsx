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
import {
  registerValidators,
  validateRegisterForm,
} from "../../lib/validators/register.validator";

export default function RegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { googleLogin, register, loading } = useAuthStore();
  const [errorResponse, setErrorResponse] = useState("");
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const searchParams = new URLSearchParams(location.search);
  const redirect = searchParams.get("redirect");

  const handleChange = (event) => {
    setErrorResponse("");
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const message = registerValidators[name](value);

    setErrors((prev) => ({
      ...prev,
      [name]: message,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { isValid, errors: validationErrors } = validateRegisterForm(form);

    setErrors(validationErrors);

    if (!isValid) {
      setErrorResponse("Please correct the errors");
      return;
    }

    const { success, data } = await register(form);

    if (success) {
      if (redirect) {
        return navigate(
          `/auth/register-success?expires_in=${data.tokenExpiresIn}&redirect=${redirect}`
        );
      }
      return navigate(
        `/auth/register-success?expires_in=${data.tokenExpiresIn}`
      );
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
      <main className="my-32">
        <CustomForm handleSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Sign Up</h1>
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
            <span className="sr-only">sign up with</span>
          </div>

          <div className="relative">
            <small className="text-red-500 text-sm absolute w-full text-center">
              {errorResponse}
            </small>
          </div>

          <CustomInput
            id="username"
            type="text"
            name="username"
            label="Username:"
            value={form.username}
            icon={UserIcon}
            placeholder="John Doe"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.username}
          />

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
            error={errors.email}
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
            error={errors.password}
          />

          <CustomCheck id="terms" handleChange={() => {}} className="mt-4">
            Acept terms and conditions
          </CustomCheck>

          <FormButton className="mt-4" disabled={loading} loading={loading}>Sign Up</FormButton>

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
      </main>
    </PublicLayout>
  );
}
