import React from "react";
import SearchItem from "./SearchItem";

function SearchList(props) {
  const { results } = props;
  return (
    <>
      <div className="Search-list">
        {results.map((item) => (
          <SearchItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default SearchList;
