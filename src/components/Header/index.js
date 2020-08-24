import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoMdBasket } from "react-icons/io";
import ConnectContext from "../../context/modules/connectContext";
import * as S from "./styles";

const Header = ({ context }) => {
  const { state } = context;
  return (
    <S.Container>
      <Link to="/">
        <S.Logo
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Logotipo amazon"
        />
      </Link>
     
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
              <span>Hello, {state.auth.user.email}</span>
              <br />
              <span> {state.auth.user.email !== 'johndoe@domain.com' ? 'Sign Out' : 'Sign In'} </span>
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
            <Link to="/cart">
              <S.ShoppingBasket>
                <IoMdBasket />

                <span>{state.cart.basket.length}</span>
              </S.ShoppingBasket>
            </Link>
          </li>
        </ul>
      </S.NavbarRight>
    </S.Container>
  );
};

export default ConnectContext(Header);
