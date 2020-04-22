import React from "react";

import "./card.scss";

interface IProps {
  title?: string;
  price?: number;
  like?: number;
  sale?: number;
}

const Card: React.FC<IProps> = ({
  title = "default",
  price = 0,
  like = 0,
  sale = 0,
}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <p>{like}</p>
      <p>{sale}</p>
    </div>
  );
};

export default Card;
