import "./ReviewCard.scss";

export const ReviewCard = () => {
  return (
    <div className="review-card-wrapper mt-5 mx-3">
      <div className="card">
        <div className="card-body p-3">
          <div className="row">
            <img
              className="col-3"
              src={require("../../../Assets/Images/reviewer-img.png")}
              alt="reviewer img"
            />
            <div className="col-8 text-start">
              <p>이름 영역</p>
              <p className="text-primary fw-bold g-0">성향 영역 성향 영역 </p>
            </div>
          </div>
          <div className="mt-2">
            후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기
            내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
            후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
          </div>
        </div>
      </div>
    </div>
  );
};
