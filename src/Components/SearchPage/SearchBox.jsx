import React from "react";
import "./SearchBox.scss";

function SearchBox(props) {
  const { placeholder, onChangeHandler } = props;
  return (
    <input
      id="searchIcon"
      type="search"
      className="search-box"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}

export default SearchBox;
