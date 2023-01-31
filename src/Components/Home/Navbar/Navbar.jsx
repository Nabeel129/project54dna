/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.scss";
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Navbar = ({ setShowLoginModal, showLoginModal }) => {
  let location = useLocation();
  let navigate = useNavigate();
  return (
    <div className="navbar-wrapper">
      <nav class="navbar navbar-expand-lg px-5">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Logo Logo
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse px-5 px-lg-0 text-start text-lg-right"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="btn nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  onClick={() => setShowLoginModal(true)}
                >
                  DNA 질문검사
                </a>
              </li>
              <li class="btn nav-item dropdown">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  타입 리포트
                </a>
                <ul class="dropdown-menu"></ul>
              </li>
              <li class="btn nav-item">
                <a class="nav-link">54DNAtype</a>
              </li>
              <li class="btn nav-item">
                <a class="nav-link">D학습유전자</a>
              </li>
            </ul>
            <div className="d-block d-lg-flex align-items-center">
              <svg
                className="d-none d-lg-block login-btn"
                onClick={() => navigate("/search")}
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.755 11.755H11.965L11.685 11.485C12.665 10.345 13.255 8.865 13.255 7.255C13.255 3.665 10.345 0.755005 6.755 0.755005C3.165 0.755005 0.255005 3.665 0.255005 7.255C0.255005 10.845 3.165 13.755 6.755 13.755C8.365 13.755 9.845 13.165 10.985 12.185L11.255 12.465V13.255L16.255 18.245L17.745 16.755L12.755 11.755ZM6.755 11.755C4.26501 11.755 2.255 9.745 2.255 7.255C2.255 4.76501 4.26501 2.755 6.755 2.755C9.245 2.755 11.255 4.76501 11.255 7.255C11.255 9.745 9.245 11.755 6.755 11.755Z"
                  fill="#272727"
                />
              </svg>
              <svg
                className="mx-3 d-none d-lg-block login-btn"
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99 0.5C4.47 0.5 0 4.98 0 10.5C0 16.02 4.47 20.5 9.99 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 9.99 0.5ZM16.92 6.5H13.97C13.65 5.25 13.19 4.05 12.59 2.94C14.43 3.57 15.96 4.85 16.92 6.5ZM10 2.54C10.83 3.74 11.48 5.07 11.91 6.5H8.09C8.52 5.07 9.17 3.74 10 2.54ZM2.26 12.5C2.1 11.86 2 11.19 2 10.5C2 9.81 2.1 9.14 2.26 8.5H5.64C5.56 9.16 5.5 9.82 5.5 10.5C5.5 11.18 5.56 11.84 5.64 12.5H2.26ZM3.08 14.5H6.03C6.35 15.75 6.81 16.95 7.41 18.06C5.57 17.43 4.04 16.16 3.08 14.5ZM6.03 6.5H3.08C4.04 4.84 5.57 3.57 7.41 2.94C6.81 4.05 6.35 5.25 6.03 6.5ZM10 18.46C9.17 17.26 8.52 15.93 8.09 14.5H11.91C11.48 15.93 10.83 17.26 10 18.46ZM12.34 12.5H7.66C7.57 11.84 7.5 11.18 7.5 10.5C7.5 9.82 7.57 9.15 7.66 8.5H12.34C12.43 9.15 12.5 9.82 12.5 10.5C12.5 11.18 12.43 11.84 12.34 12.5ZM12.59 18.06C13.19 16.95 13.65 15.75 13.97 14.5H16.92C15.96 16.15 14.43 17.43 12.59 18.06ZM14.36 12.5C14.44 11.84 14.5 11.18 14.5 10.5C14.5 9.82 14.44 9.16 14.36 8.5H17.74C17.9 9.14 18 9.81 18 10.5C18 11.19 17.9 11.86 17.74 12.5H14.36Z"
                  fill="#272727"
                />
              </svg>
              <a
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  location.pathname === "/signup"
                    ? navigate("/")
                    : setShowLoginModal(true);
                }}
              >
                로그인
              </a>
              <button
                type="button"
                className="btn btn-primary text-nowrap py-2 px-4 mx-lg-3 mt-3 mt-lg-0"
                onClick={() => setShowLoginModal(true)}
              >
                검사시작
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
