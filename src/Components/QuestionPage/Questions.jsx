import React from "react";
import "./Questions.scss";

const Questions = (props) => {
  const { id, question } = props.question;
  return (
    <>
      <div className="question">
        <div className="left">
          <span>{`${id}. ${question}`}</span>
        </div>
        <div className="right">
          <button className="btn btn-outline-secondary text-nowrap px-4 ms-2">
            그렇다
          </button>
          <button className="btn btn-outline-secondary  text-nowrap px-4 ms-2">
            아니다
          </button>
        </div>
      </div>
    </>
  );
};

export default Questions;
