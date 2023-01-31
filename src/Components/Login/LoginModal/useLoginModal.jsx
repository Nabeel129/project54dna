import { useState } from "react";

export const useLoginModal = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  return {
    emailAddress,
    password,
    setEmailAddress,
    setPassword,
  };
};
