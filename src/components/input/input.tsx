import cx from "classnames";
import React from "react";

import "./input.scss";

type Prop = JSX.IntrinsicElements["input"] & {
  primary?: boolean;
  type?: string;
  placeholder?: string;
};

const Input: React.FC<Prop> = ({
  primary,
  className,
  type = "text",
  placeholder,
}) => {
  const inputClass = cx("input", { "input-primary": primary }, className);
  return (
    <div>
      <h1>muhammed</h1>
      <input type={type} className={inputClass} placeholder={placeholder} />
    </div>
  );
};

export default Input;
