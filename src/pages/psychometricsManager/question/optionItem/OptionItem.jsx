//libraries
import React from "react";
import { CheckCircleFilled } from "@ant-design/icons";

//css
import "./optionitem.css";

const OptionItem = ({ text, selected, loading, onClick }) => {
  return (
    <button
      className={
        selected
          ? "option-item-container option-item-container-selected"
          : "option-item-container"
      }
      disabled={loading}
      size="large"
      onClick={onClick}
    >
      <div className="option-item-checked">
        <CheckCircleFilled
          className={selected ? "response-selected" : "checked-icon"}
          style={{ color: "rgb(0 155 47)" }}
        />
      </div>
      <div className="option-text-container">
        <p className="option-item-text">{text}</p>
      </div>
    </button>
  );
};

export default OptionItem;
