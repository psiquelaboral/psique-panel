import React from "react";
import { CheckCircleFilled } from "@ant-design/icons";

import "./optionitem.css";

const OptionItem = ({ text, selected, onClick }) => {
  return (
    <div className="option-item-container" onClick={onClick}>
      <div className="option-item-checked">
        <CheckCircleFilled
          className={selected ? "response-selected" : "checked-icon"}
          style={{ color: "#30df65" }}
        />
      </div>
      <div className="option-text-container">
        <p className="option-item-text">{text}</p>
      </div>
    </div>
  );
};

export default OptionItem;
