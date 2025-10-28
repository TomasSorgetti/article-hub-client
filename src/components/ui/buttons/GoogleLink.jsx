import GoogleIcon from "../../../assets/icons/google.svg";
import Image from "../Image";
import { GoogleLogin } from "@react-oauth/google";

export default function GoogleLink({ handleSuccess, handleError }) {
  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      useOneTap={false}
      text="signin_with"
    />
  );
}

// import { useGoogleLogin } from "@react-oauth/google";

// const login = useGoogleLogin({
//   onSuccess: (codeResponse) => console.log(codeResponse),
//   flow: "auth-code",
// });

// <MyCustomButton onClick={() => login()}>Sign in with Google 🚀</MyCustomButton>;
