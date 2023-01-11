import React, { useState } from "react";

import OptionItem from "../optionItem/OptionItem";
import "./question.css";

const Question = ({ question, next }) => {
  const [selected, setSelected] = useState();
  const { text, options } = question;
  return (
    <div className="question-container">
      <div className="question-title-container">
        <p className="question-text">{text}</p>
      </div>
      <div className="on-question-question-options-container">
        {options.map((option) => (
          <OptionItem
            key={option.id}
            id={option.id}
            text={option.text}
            selected={selected === option.id}
            onClick={() => setSelected(option.id)}
          />
        ))}
      </div>
    </div>
  );
};
export default Question;
