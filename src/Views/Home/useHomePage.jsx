import { useState } from "react";

export const useHomePage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return {
    showLoginModal,
    setShowLoginModal,
  };
};
