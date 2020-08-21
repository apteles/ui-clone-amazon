import React from "react";
import HeroSlider from "../../components/HeroSlider";
import Product from "../../components/Product";
import ConnectContext from "../../context/modules/cart/connectContext";
import * as S from "./styles";

function createProduct() {
  return {
    id: Math.floor(Math.random() * 10000),
    title: "Xiaomi Redmi Note 9 128GB 4GB RAM - Versão Global - Midnight Grey",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61VmUpCs7PL._AC_SX522_.jpg",
    price: 1.55,
    rating: 3,
  };
}
const Home = ({ context }) => {
  return (
    <S.Container>
      <HeroSlider />
      <S.SectionProducts>
        {Array(16)
          .fill(0)
          .map((v) => (
            <Product
              key={v}
              product={createProduct()}
              handleClick={context.addProductToCart}
            />
          ))}
      </S.SectionProducts>
    </S.Container>
  );
};

export default ConnectContext(Home);
