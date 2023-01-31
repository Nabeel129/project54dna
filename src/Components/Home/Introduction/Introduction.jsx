import "./Introduction.scss";

export const Introduction = (props) => {
  return (
    <div className="introduction-wrapper container-fluid row gx-0">
      <div className="content col-12">
        <div className="col-12 d-flex justify-content-center introduction-heading">
          54DNAtype의 학습유전자 타입 검사는 9개 그룹으로 나뉘어 54개의 타입
          결과로 제시 합니다.
        </div>
        <div className="col-12 d-flex justify-content-center introduction-sub-heading mt-1">
          매우 간단한 질문검사 방식으로 당신은 어떤 학습유전자 타입인지 확인해
          보세요.
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button
            className="btn btn-primary px-3 mt-4"
            onClick={() => props.setShowLoginModal(true)}
          >
            검사시작
          </button>
        </div>
      </div>
      <div className="col-12">
        <img
          className="img-fluid introduction-img"
          src={require("../../../Assets/Images/introduction-bg.png")}
          alt="introduction-img"
        />
      </div>
    </div>
  );
};
