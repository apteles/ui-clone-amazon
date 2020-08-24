import React from "react";
import ConnectContext from "../../context/modules/connectContext";
import * as S from "./styles";

const Checkout = ({ context }) => {
  const {
    state: { cart },
  } = context;
  return (
    <S.Container>
      <S.AD src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />

      {cart.basket.length <= 0 ? (
        <h2>Seu carrinho está vazio</h2>
      ) : (
        <div>Seu gateway de pagamento</div>
      )}
    </S.Container>
  );
};

export default ConnectContext(Checkout);
