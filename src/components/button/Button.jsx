import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./button.css";

const Button = ({ text, type, icon, width, styles }) => {
  // INLINE STYLES
  const style = {
    ...styles,
    width,
  };

  return (
    <button className="button-container" style={style}>
      {/* Icon section */}
      {icon ? <FontAwesomeIcon icon={icon} style={{ marginRight: 5 }} /> : null}
      <p>{text}</p>
    </button>
  );
};

export default Button;
