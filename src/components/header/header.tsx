import React from "react";

import "./header.scss";

interface IProps {
  store?: any;
}

const Header: React.FC<IProps> = ({ store }) => {
  return (
    <header>
      <div className="logo">
        <img src="/static/logo.svg" alt="" />
      </div>

      <nav>
        <a href="">Ana Sayfa</a>
        <a href="">En Çok Satanlar</a>
        <a href="">En Beğenilenler</a>
      </nav>
    </header>
  );
};

export default Header;
