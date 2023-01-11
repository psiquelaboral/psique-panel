import React, { useState } from "react";

const OptionGroup = ({ children }) => {
  const [selected, setSelected] = useState();

  children.forEach((Option) => {
    var tempProps = JSON.parse(JSON.stringify(Option.props));
    tempProps.onClick = () => setSelected(Option.props.id);
    tempProps.selected = selected === Option.props.id;
    Object.preventExtensions(tempProps);
    Option.props = tempProps;
  });

  console.log(children);

  return (
    <div className="on-question-question-options-container">{children}</div>
  );
};

export default OptionGroup;
