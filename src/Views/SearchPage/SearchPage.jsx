import React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "../../Components/Home/Navbar/Navbar";
import { useHomePage } from "../Home/useHomePage";
import { Footer } from "../../Components/Home/Footer/Footer";
import SearchBox from "../../Components/SearchPage/SearchBox";
import SearchList from "../../Components/SearchPage/SearchList";
import Data from "./Data";
import "./SearchPage.scss";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [searchField, setSearchField] = useState("");
  const { showLoginModal, setShowLoginModal } = useHomePage();

  //Getting static data from the file for the search list.
  useEffect(() => {
    setResults(Data);
    // console.log(Data);
  }, []);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchField(searchString);
  };

  const filteredResults = results.filter((result) => {
    return result.title.toLowerCase().includes(searchField);
  });

  return (
    <>
      <Navbar
        setShowLoginModal={setShowLoginModal}
        showLoginModal={showLoginModal}
      />
      <div className="search">
        <h1 className="search-title text-nowrap">검색 결과</h1>
        <div className="search-line"></div>
        <SearchBox onChangeHandler={onSearchChange} placeholder="Search..." />
        {results.length === 0 ? (
          <span className="noResult">
            {" "}
            검색 결과가 없습니다. 다시 검색해주세요.{" "}
          </span>
        ) : (
          <SearchList results={filteredResults} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
