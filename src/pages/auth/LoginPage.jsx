import CustomInput from "../../components/ui/forms/CustomInput";
import PublicLayout from "../../layouts/PublicLayout";
import EmailIcon from "../../assets/icons/email.svg";
import PasswordIcon from "../../assets/icons/password.svg";
import CustomForm from "../../components/ui/forms/CustomForm";
import GoogleLink from "../../components/ui/buttons/GoogleLink";
import GithubLink from "../../components/ui/buttons/GithubLink";
import CustomCheck from "../../components/ui/forms/CustomCheck";
import { NavLink } from "react-router-dom";
import FormButton from "../../components/ui/buttons/FormButton";

export default function LoginPage() {
  const handleChange = () => {
    console.log("Handle Change");
  };
  const handleBlur = () => {
    console.log("Handle Blur");
  };
  const handleSubmit = () => {
    console.log("Handle Submit");
  };

  return (
    <PublicLayout title="Login Page" description="Login Page">
      <CustomForm
        handleSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-[30rem] mx-auto mt-20"
      >
        <h1 className="text-3xl font-bold">Sign in</h1>
        <p className="text-font-secondary">
          We´ll get you up and running so you can verify your personal
          information and customize your account.
        </p>

        <div className="flex gap-4 items-center w-full">
          <GoogleLink>Sign in with Google</GoogleLink>
          <GithubLink>Sign in with GitHub</GithubLink>
        </div>

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

        <div className="flex items-center justify-between w-full mt-4">
          <CustomCheck id="remember-me" handleChange={() => {}}>
            Remember me
          </CustomCheck>
          <NavLink
            to="/forgot-password"
            className="italic text-sm text-font-secondary"
          >
            Forgot password?
          </NavLink>
        </div>

        <FormButton className="mt-4">Sign In</FormButton>

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
