import { Counts } from "../../Components/Home/Counts/Counts";
import { Footer } from "../../Components/Home/Footer/Footer";
import { Introduction } from "../../Components/Home/Introduction/Introduction";
import { Navbar } from "../../Components/Home/Navbar/Navbar";
import { Report } from "../../Components/Home/Report/Report";
import { Reviews } from "../../Components/Home/Reviews/Reviews";
import { LoginModal } from "../../Components/Login/LoginModal/LoginModal";
import { useHomePage } from "./useHomePage";
import "./HomePage.scss";

export const HomePage = () => {
  const { showLoginModal, setShowLoginModal } = useHomePage();

  return (
    <div className="home-page-wrapper">
      <Navbar
        setShowLoginModal={setShowLoginModal}
        showLoginModal={showLoginModal}
      />
      <Introduction
        setShowLoginModal={setShowLoginModal}
        showLoginModal={showLoginModal}
      />
      <Counts />
      <Report />
      <Reviews />
      <Footer />
      <LoginModal
        showModal={showLoginModal}
        handleShowModal={setShowLoginModal}
      />
    </div>
  );
};
