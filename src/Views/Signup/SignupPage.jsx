import { useSignUpPage } from "./useSignupPage";
import "./SignupPage.scss";
import { Navbar } from "../../Components/Home/Navbar/Navbar";
import { Footer } from "../../Components/Home/Footer/Footer";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    userEmail,
    password,
    confirmPassword,
    userNickName,
    setUserEmail,
    setPassword,
    setUserNickName,
    setConfirmPassword,
    handleLogin,
    setVerificationCode,
    verificationCode,
  } = useSignUpPage();

  const handleBefore = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="create-account-wrapper">
        <div className="signup">
          <h1 className="mt-5">Logo Logo</h1>
          <div className="sign-up-bg">
            {" "}
            <div className="row justify-content-center mx-3 mx-lg-0">
              <div className="col-sm-12 col-md-6 col-lg-3">
                <label
                  className="mt-5 fw-bold col-12 text-start"
                  htmlFor="nickName"
                >
                  닉네임<span className="required-field">*</span>
                </label>
                <input
                  id="nickName"
                  className="form-control"
                  type="text"
                  value={userNickName}
                  onChange={(e) => setUserNickName(e.target.value)}
                  placeholder="닉네임"
                />
                <div className="instruction-text text-start col-12 mt-1">
                  홈페이지 내에서 사용할 닉네임을 입력하세요. (영문 대문자,
                  소문자, 숫자만 가능)
                </div>
                <label
                  className="mt-3 fw-bold col-12 text-start"
                  htmlFor="emailAddress"
                >
                  이메일 주소<span className="required-field">*</span>
                </label>
                <div className="col-12 d-flex">
                  <div className="col-8">
                    <input
                      id="emailAddress"
                      className="form-control"
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="이메일 주소"
                    />
                  </div>
                  <button className="btn btn-primary ms-3 text-nowrap">
                    인증번호 받기
                  </button>
                </div>
                <div className="col-12 mt-2">
                  <input
                    id="verificationCode"
                    className="form-control"
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="인증번호를 입력해주세요"
                  />
                </div>
                <div className="instruction-text text-start col-12 mt-1">
                  대문자, 소문자, 특수문자, 숫자를 포함하여 8~16자로 입력해
                  주세요.
                </div>
                <label
                  className="mt-3 fw-bold col-12 text-start"
                  htmlFor="password"
                >
                  비밀번호<span className="required-field">*</span>
                </label>
                <input
                  id="password"
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호"
                />
                <div className="instruction-text text-start col-12 mt-1">
                  대문자, 소문자, 특수문자, 숫자를 포함하여 8~16자로 입력해
                  주세요.
                </div>
                <label
                  className="mt-3 fw-bold col-12 text-start"
                  htmlFor="confirmPassword"
                >
                  비밀번호 재확인<span className="required-field">*</span>
                </label>
                <input
                  id="confirmPassword"
                  className="form-control"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="비밀번호 재확인"
                />
                <div className="instruction-text text-start col-12 mt-1">
                  위에 입력하신 비밀번호를 한번 더 입력해 주세요.
                </div>
                <div className="text-start fw-bold mt-3">
                  휴대폰 인증<span className="required-field">*</span>
                </div>
                <div className="text-start">
                  <button
                    type="button"
                    className="btn btn-primary text-nowrap py-2 px-5 mt-1"
                  >
                    인증하기
                  </button>
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <button
                    type="button"
                    class="btn btn-outline-primary text-nowrap py-2 px-5 mt-1"
                    onClick={handleBefore}
                  >
                    이전
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary text-nowrap py-2 px-5 mt-1 ms-1"
                    onClick={handleLogin}
                  >
                    가입하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
