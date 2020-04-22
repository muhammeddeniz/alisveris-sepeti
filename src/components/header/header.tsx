import React from "react";
import Link from "next/link";

import "./header.scss";
import { Button } from "../index";

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
        <Link href="/index">
          <a>Ana Sayfa</a>
        </Link>

        <Link href="bestSellerPage">
          <a>En Çok Satanlar</a>
        </Link>

        <Link href="bestLiked">
          <a>En Beğenilenler</a>
        </Link>
      </nav>

      <Link href="newProduct">
        <a>
          <Button secondary>Yeni Ürün Ekle</Button>
        </a>
      </Link>
    </header>
  );
};

export default Header;
