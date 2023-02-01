import React, { useState } from "react";
import { Navbar } from "../../Components/Home/Navbar/Navbar";
import { useHomePage } from "../Home/useHomePage";
import { Footer } from "../../Components/Home/Footer/Footer";
import "./QuestionPage.scss";
import CardsData from "../../Components/QuestionPage/CardsData";
import DNAtestCard from "../../Components/QuestionPage/DNAtestCard";
import Questions from "../../Components/QuestionPage/Questions";
import QuestionsData from "../../Components/QuestionPage/QuestionsData";

import ReactPaginate from "react-paginate";

function SingleQuestion({ currentItems }) {
  return (
    <>
      {currentItems.map((question) => {
        return <Questions key={question.id} question={question} />;
      })}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching QuestionsData from another resources.
  // (This could be QuestionsData from props; or QuestionsData loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading QuestionsData from ${itemOffset} to ${endOffset}`);
  const currentItems = QuestionsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(QuestionsData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % QuestionsData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <SingleQuestion currentItems={currentItems} />

      <ReactPaginate
        pageCount={pageCount}
        nextLabel="다음"
        nextClassName="btn btn-outline-primary px-4 ms-2 mt-5"
        nextLinkClassName="custom"
        onPageChange={handlePageClick}
        previousLabel=" "
        pageRangeDisplayed={-1}
        marginPagesDisplayed={0}
        previousClassName="d-none"
        renderOnZeroPageCount={null}
        containerClassName="pagination mt-5"
      />
    </>
  );
}

const QuestionPage = () => {
  const { showLoginModal, setShowLoginModal } = useHomePage();
  return (
    <>
      <Navbar
        setShowLoginModal={setShowLoginModal}
        showLoginModal={showLoginModal}
      />
      <div className="questions_wrapper">
        <div className="hero_section">
          <p className="title text-nowrap">DNA 질문검사</p>
          <div className="cards">
            {CardsData.map((card) => {
              return <DNAtestCard key={card.id} card={card} />;
            })}
          </div>
        </div>
        <div className="questions">
          <PaginatedItems className="mt-4" itemsPerPage={11} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default QuestionPage;
