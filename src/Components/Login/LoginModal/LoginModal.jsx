import { Modal, Row, Col } from "react-bootstrap";
import { useLoginModal } from "./useLoginModal";
import "./LoginModal.scss";
import { useNavigate } from "react-router-dom";

export const LoginModal = (props) => {
  const { emailAddress, password, setEmailAddress, setPassword } =
    useLoginModal();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="login-modal-wrapper">
      <Modal
        className="login-modal-wrapper"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.showModal}
        onHide={() => props.handleShowModal(false)}
      >
        <Modal.Header>
          <button
            type="button"
            className="btn-close modal-close-btn"
            data-bs-dismiss="modal"
            onClick={() => props.handleShowModal(false)}
            aria-label="Close"
          ></button>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="col-12 login-text d-flex justify-content-center">
              로그인
            </Col>
            <Col className="col-12 mt-5">
              <label className="fw-bold">이메일 주소</label>
              <div className="input-icons mt-1">
                <svg
                  className="icon"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 12L18 19.5L6 12V9L18 16.5L30 9M30 6H6C4.335 6 3 7.335 3 9V27C3 27.7956 3.31607 28.5587 3.87868 29.1213C4.44129 29.6839 5.20435 30 6 30H30C30.7956 30 31.5587 29.6839 32.1213 29.1213C32.6839 28.5587 33 27.7956 33 27V9C33 8.20435 32.6839 7.44129 32.1213 6.87868C31.5587 6.31607 30.7956 6 30 6Z"
                    fill="#272727"
                  />
                </svg>
                <input
                  id="emailAddress"
                  className="form-control input-field"
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="이메일 주소"
                />
              </div>
              <label className="fw-bold mt-3">패스워드</label>
              <div className="input-icons mt-1">
                <svg
                  className="icon"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 3C13.8645 3 10.5 6.3645 10.5 10.5V15H9C8.20435 15 7.44129 15.3161 6.87868 15.8787C6.31607 16.4413 6 17.2044 6 18V30C6 30.7956 6.31607 31.5587 6.87868 32.1213C7.44129 32.6839 8.20435 33 9 33H27C27.7956 33 28.5587 32.6839 29.1213 32.1213C29.6839 31.5587 30 30.7956 30 30V18C30 17.2044 29.6839 16.4413 29.1213 15.8787C28.5587 15.3161 27.7956 15 27 15H25.5V10.5C25.5 6.3645 22.1355 3 18 3ZM13.5 10.5C13.5 8.019 15.519 6 18 6C20.481 6 22.5 8.019 22.5 10.5V15H13.5V10.5ZM19.5 26.5845V30H16.5V26.5845C15.9756 26.2842 15.5545 25.832 15.2922 25.2875C15.03 24.7431 14.9389 24.1319 15.031 23.5347C15.1231 22.9374 15.3941 22.3821 15.8081 21.9419C16.2222 21.5017 16.76 21.1974 17.3505 21.069C17.7891 20.972 18.2439 20.9747 18.6814 21.0769C19.1188 21.1791 19.5277 21.3782 19.878 21.6595C20.2282 21.9408 20.5109 22.2971 20.7051 22.7022C20.8993 23.1073 21 23.5508 21 24C20.9991 24.5246 20.86 25.0397 20.5967 25.4935C20.3334 25.9472 19.9551 26.3235 19.5 26.5845Z"
                    fill="#272727"
                  />
                </svg>
                <input
                  id="password"
                  className="form-control input-field"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호"
                />
              </div>
            </Col>
            <Col className="col-12 mt-3 d-flex justify-content-center">
              <button className="btn btn-primary col-6">로그인</button>
            </Col>
            <Col className="col-12 mt-3 d-flex justify-content-center">
              <button
                className="btn btn-outline-primary col-6"
                onClick={handleClick}
              >
                회원가입
              </button>
            </Col>
            <Col className="col-12 d-flex justify-content-center mt-3">
              이메일 찾기 | 비밀번호 재설정
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};
