import cx from "classnames";
import React from "react";

import "./button.scss";

type IProps = JSX.IntrinsicElements["button"] & {
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
};

const Button: React.FC<IProps> = ({
  children,
  primary,
  secondary,
  outline,
  className,
}) => {
  const btnClass = cx(
    "btn",
    {
      "btn-primary": primary,
      "btn-secondary": secondary,
      "btn-outline": outline,
    },
    className
  );

  return (
    <div>
      <button className={btnClass}>{children}</button>
    </div>
  );
};

export default Button;
