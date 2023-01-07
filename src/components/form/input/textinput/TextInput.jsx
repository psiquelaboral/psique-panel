import React from "react";

import "./textinput.css";

const TextInput = ({ oneline, type, label, placeholder }) => {
  return (
    <div className={oneline ? "input-container-oneline" : "input-container"}>
      <label htmlFor={label} className="">
        {label}
      </label>
      <input
        id={label}
        className="custom-text-input"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
