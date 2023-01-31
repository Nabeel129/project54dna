import "./Counts.scss";

export const Counts = () => {
  return (
    <div className="counts-wrapper">
      <div className="row justify-content-between count mt-5">
        <div className="col-12 col-lg-3">
          <div className="count-text">2670건</div>
          <p>누적 질문검사</p>
        </div>
        <div className="col-12 col-lg-3">
          <div className="count-text">739명</div>
          <p>회원가입 수</p>
        </div>
        <div className="col-12 col-lg-3">
          <div className="count-text">325번</div>
          <p>친구 신청건</p>
        </div>
        <div className="col-12 col-lg-3">
          <div className="count-text">92%</div>
          <p>A~D유형까지 모두응답</p>
        </div>
      </div>
    </div>
  );
};
