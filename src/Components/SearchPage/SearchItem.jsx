import React from "react";

function SearchItem(props) {
  const { id, title, type, description } = props;
  return (
    <>
      <div className="item-container" key={id}>
        <h2>{title}</h2>
        <p>{type}</p>
        <p>{description}</p>
      </div>
    </>
  );
}

export default SearchItem;
