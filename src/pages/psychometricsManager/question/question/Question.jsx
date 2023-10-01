//libraries
import React, { useState } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import OptionItem from "../optionItem/OptionItem";

//css
import "./question.css";

const Question = ({ question, loading, onSelect }) => {
  const [selected, setSelected] = useState();
  const { text, options, id, instructions } = question;

  const handleOnClick = (option) => {
    setSelected(option.id);
    onSelect({
      questionId: question.id,
      itemId: question.itemId,
      questionText: question.text,
      answerType: question.answerType,
      selectedOption: option,
    });
  };

  return (
    <div className="question-container">
      <div className="question-title-container">
        <p className="question-text">
          {id}
          <CaretRightOutlined style={{ fontSize: 24, marginRight: 5 }} />
          {text}
        </p>
        <p className="instruction-text"> {instructions}</p>
      </div>
      <div className="on-question-question-options-container">
        {options.map((option) => (
          <OptionItem
            loading={loading}
            key={option.id}
            id={option.id}
            text={option.label}
            selected={selected === option.id}
            onClick={() => handleOnClick(option)}
          />
        ))}
      </div>
    </div>
  );
};
export default Question;
