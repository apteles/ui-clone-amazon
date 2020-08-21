import React from "react";

import * as S from "./styles";

const Product = ({ product, handleClick }) => {
  const { title, image, price, rating } = product;
  return (
    <S.Container>
      <S.ProductInfo>
        <S.Title>{title}</S.Title>
        <S.Price>
          <span>R$</span>
          <strong>{price}</strong>
        </S.Price>
        <S.Rating>
          {Array(rating)
            .fill(0)
            .map((_) => (
              <span role="img" aria-label="starts" aria-labelledby="starts">
                ⭐
              </span>
            ))}
        </S.Rating>
      </S.ProductInfo>
      <img src={image} alt={title} />
      <button type="button" onClick={() => handleClick(product)}>
        adicionar ao carrinho
      </button>
    </S.Container>
  );
};

export default Product;
