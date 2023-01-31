import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

export const useSignUpPage = () => {
  const [userNickName, setUserNickName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [verificationCode, setVerificationCode] = useState(false);
  const navigate = useNavigate();

  const handleSignUpWithEmailAndPassword = async () => {
    try {
      setIsSubmitted(true);
      if (
        userEmail.length > 0 &&
        password.length > 0 &&
        password === confirmPassword
      ) {
        await Auth.signUp({
          username: userEmail,
          password: password,
          attributes: { email: userEmail },
        });
        navigate("/account-verification");
      }
    } catch (err) {
      console.log(err);
      //   addNotificationToApp("Error", "failed to create account", "danger");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return {
    userEmail,
    password,
    confirmPassword,
    isSubmitted,
    userNickName,
    setUserEmail,
    setPassword,
    setConfirmPassword,
    handleLogin,
    handleSignUpWithEmailAndPassword,
    setUserNickName,
    verificationCode,
    setVerificationCode,
  };
};
