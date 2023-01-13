import React from "react";
import { CheckCircleFilled } from "@ant-design/icons";

import "./optionitem.css";

const OptionItem = ({ text, selected, loading, onClick }) => {
  return (
    <button
      className="option-item-container"
      disabled={loading}
      size="large"
      onClick={onClick}
    >
      <div className="option-item-checked">
        <CheckCircleFilled
          className={selected ? "response-selected" : "checked-icon"}
          style={{ color: "#30df65" }}
        />
      </div>
      <div className="option-text-container">
        <p className="option-item-text">{text}</p>
      </div>
    </button>
  );
};

export default OptionItem;
