import { useRef } from "react";
import { ReviewCard } from "../ReviewCard/ReviewCard";
import "./Reviews.scss";

export const Reviews = () => {
  const ref = useRef(null);

  const reviews = [
    {
      name: "이름 영역",
      title: "성향 영역 성향 영역 ",
      description:
        "후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용",
    },
    {
      name: "이름 영역",
      title: "성향 영역 성향 영역 ",
      description:
        "후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용",
    },
    {
      name: "이름 영역",
      title: "성향 영역 성향 영역 ",
      description:
        "후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용",
    },
    {
      name: "이름 영역",
      title: "성향 영역 성향 영역 ",
      description:
        "후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용",
    },
    {
      name: "이름 영역",
      title: "성향 영역 성향 영역 ",
      description:
        "후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용",
    },
    {
      name: "이름 영역",
      title: "성향 영역 성향 영역 ",
      description:
        "후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용",
    },
    {
      name: "이름 영역",
      title: "성향 영역 성향 영역 ",
      description:
        "후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용",
    },
    {
      name: "이름 영역",
      title: "성향 영역 성향 영역 ",
      description:
        "후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용",
    },
    {
      name: "이름 영역",
      title: "성향 영역 성향 영역 ",
      description:
        "후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용",
    },
  ];

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <div className="reviews-wrapper mt-5">
      <div className="row pt-5">
        <div className="col-12 fw-bold">사용후기</div>
        <div className="d-flex reviews-section" ref={ref}>
          {reviews.map((review) => {
            return <ReviewCard />;
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <svg
          className="cursor-pointer"
          onClick={() => scroll(-500)}
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_23_1406)">
            <circle cx="43" cy="41" r="23.3333" fill="white" />
          </g>
          <path d="M46.1111 34L39.1111 41L46.1111 48" stroke="#272727" />
          <defs>
            <filter
              id="filter0_d_23_1406"
              x="0.666672"
              y="0.666626"
              width="86.6667"
              height="86.6666"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="3" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.760784 0 0 0 0 0.796078 0 0 0 0 0.839216 0 0 0 0.2 0"
              />
              <feBlend
                mode="multiply"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_23_1406"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_23_1406"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <svg
          className="cursor-pointer"
          onClick={() => scroll(500)}
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_23_1407)">
            <circle cx="43" cy="41" r="23.3333" fill="white" />
          </g>
          <path d="M39.8889 34L46.8889 41L39.8889 48" stroke="#272727" />
          <defs>
            <filter
              id="filter0_d_23_1407"
              x="0.666656"
              y="0.666626"
              width="86.6667"
              height="86.6666"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="3" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.760784 0 0 0 0 0.796078 0 0 0 0 0.839216 0 0 0 0.2 0"
              />
              <feBlend
                mode="multiply"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_23_1407"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_23_1407"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="row mt-5 reviews-text mx-2 mx-lg-0">
        <div className="col-12 d-flex justify-content-center">
          학습유전자 타입은 총 54개의 타입이 있습니다.
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center reviews-text">
        회원가입후 무료로 회원님의 학습유전자 타입을 발견해 보세요!
      </div>
      <button className="btn btn-primary mt-4 px-4">바로가기</button>
      <div className="row">
        <div className="col-12">
          <img
            className="img-fluid reviews-img"
            src={require("../../../Assets/Images/reviews-bg.png")}
            alt="introduction-img"
          />
        </div>
      </div>
    </div>
  );
};
