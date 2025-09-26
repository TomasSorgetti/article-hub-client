import CustomInput from "../../components/ui/forms/CustomInput";
import PublicLayout from "../../layouts/PublicLayout";
import UserIcon from "../../assets/icons/user.svg";
import EmailIcon from "../../assets/icons/email.svg";
import PasswordIcon from "../../assets/icons/password.svg";
import CustomForm from "../../components/ui/forms/CustomForm";
import GoogleLink from "../../components/ui/buttons/GoogleLink";
import GithubLink from "../../components/ui/buttons/GithubLink";
import CustomCheck from "../../components/ui/forms/CustomCheck";
import { NavLink } from "react-router-dom";
import FormButton from "../../components/ui/buttons/FormButton";

export default function RegisterPage() {
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
    <PublicLayout title="Register Page" description="Register Page">
      <CustomForm
        handleSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-[30rem] mx-auto mt-32"
      >
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-font-secondary">
          We´ll get you up and running so you can verify your personal
          information and customize your account.
        </p>

        <div className="flex gap-4 items-center w-full">
          <GoogleLink>Sign up with Google</GoogleLink>
          <GithubLink>Sign up with GitHub</GithubLink>
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
          <NavLink to="/auth/login" className="text-primary hover:underline">
            Login here
          </NavLink>
        </small>
      </CustomForm>
    </PublicLayout>
  );
}
