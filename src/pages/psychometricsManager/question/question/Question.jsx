import React, { useState } from "react";

import OptionItem from "../optionItem/OptionItem";
import "./question.css";

const Question = ({ question, loading, onSelect }) => {
  const [selected, setSelected] = useState();
  const { text, options } = question;

  const switchOptionItem = (type, option) => {
    const handleOnClick = () => {
      setSelected(option.id);
      onSelect({
        questionId: question.id,
        nom35ItemId: question.itemId,
        questionText: question.text,
        answerType: question.answerType,
        selectedOption: option,
      });
    };

    const options = {
      YES_NO: (
        <OptionItem
          loading={loading}
          key={option.id}
          id={option.id}
          text={option.label}
          selected={selected === option.id}
          onClick={handleOnClick}
        />
      ),
      LIKERT: (
        <OptionItem
          loading={loading}
          key={option.id}
          id={option.id}
          text={option.text}
          selected={selected === option.id}
          onClick={handleOnClick}
        />
      ),
    };

    return options[type];
  };

  return (
    <div className="question-container">
      <div className="question-title-container">
        <p className="question-text">{text}</p>
      </div>
      <div className="on-question-question-options-container">
        {options.map((option) => switchOptionItem(question.answerType, option))}
      </div>
    </div>
  );
};
export default Question;
