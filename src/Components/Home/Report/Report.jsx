import "./Report.scss";

export const Report = () => {
  return (
    <div className="report-wrapper row container-fluid">
      <div className="col-12 d-block d-lg-flex justify-content-center align-items-center">
        <div className="col-12 col-lg-4 mt-5 mt-lg-0 text-center text-lg-start">
          <div className="type-report-text">타입 리포트</div>
          <div className="generic-ability-text mt-1">
            나의 유전자 능력을 파헤치다.
          </div>
          <div className="report-text mt-4 mx-2 mx-lg-0">
            회원가입 후에 무료로 학습 유전자 타입 질문검사를 추진하면 부모로부터
            물려받아 조합된 유전자 타입을 파악하여 나를 더 일찍 알고 대처하는
            것에 의미가 있습니다.
          </div>
          <div className="d-flex justify-content-center justify-content-lg-start mt-3">
            <button className="btn btn-primary text-nowrap px-4">
              타입유형
            </button>
            <button className="btn btn-outline-primary text-nowrap px-4 ms-2">
              이론탐구
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-6 mt-3 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
          <img
            className="img-fluid report-img"
            src={require("../../../Assets/Images/report-bg.png")}
            alt="report-img"
          />
        </div>
      </div>
    </div>
  );
};
