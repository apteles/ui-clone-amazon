import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoMdBasket } from "react-icons/io";
import ConnectContext from "../../context/modules/cart/connectContext";
import * as S from "./styles";

const Header = ({ context }) => {
  const { state } = context;
  return (
    <S.Container>
      <S.Logo
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Logotipo amazon"
      />
      <S.SearchForm>
        <input placeholder="Pesquisar em Amazon.com.br" />
        <button>
          <BsSearch />
        </button>
      </S.SearchForm>
      <S.NavbarRight>
        <ul>
          <li>
            <Link to="/login">
              <span>Hello, Guest</span>
              <br />
              <span>Sign In</span>
            </Link>
          </li>
          <li>
            <Link to="/checkout">
              <span>Returns</span>
              <br />
              <span>& Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <span>Your</span>
              <br />
              <span>Prime</span>
            </Link>
          </li>

          <li>
            <Link to="/login">
              <S.ShoppingBasket>
                <IoMdBasket />

                <span>{state.basket.length}</span>
              </S.ShoppingBasket>
            </Link>
          </li>
        </ul>
      </S.NavbarRight>
    </S.Container>
  );
};

export default ConnectContext(Header);
