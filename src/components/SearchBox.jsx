import React from "react";
import "./searchbox.css";
//(event) => props.setSearchValue(event.target.value)
const Searchbox = (props) => {
  const resetInputField = () => {
    setSearchValue("christmas")
  }

  const callSearchFunction = (event) => {props.setSearchValue(event.target.value);
    resetInputField();
  }
  return (
    <div>
      <input
        className="form-control"
        value={props.value}
        onChange={callSearchFunction}
        placeholder="Type to search"
      />
    </div>
  );
};

export default Searchbox;
