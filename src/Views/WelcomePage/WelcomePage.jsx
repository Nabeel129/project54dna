import { useNavigate } from "react-router-dom";
import { Footer } from "../../Components/Home/Footer/Footer";
import { Navbar } from "../../Components/Home/Navbar/Navbar";
import "./WelcomePage.scss";

export const WelcomePage = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <div className="welcome-page-wrapper">
        <h1 className="mt-5">Logo Logo</h1>
        <div className="row mt-5 justify-content-center">
          <h1 className="col-12 mt-5 fw-bold">환영합니다!</h1>
          <p className="col-8 col-lg-4">
            홍길동님의 54DNAtype 아이디는{" "}
            <span className="text-primary">gildonghong@email.com</span> 입니다.
            지금 바로 로그인 하여 54DNAtype의 DNA질문검사를 시작해 보세요.
          </p>
          <div className="d-flex justify-content-center mt-3">
            <button
              type="button"
              class="btn btn-outline-primary text-nowrap py-2 px-5 mt-1"
              onClick={handleClick}
            >
              메인화면
            </button>
            <button
              type="button"
              className="btn btn-primary text-nowrap py-2 px-5 mt-1 ms-1"
              onClick={handleClick}
            >
              DNA 질문검사
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
