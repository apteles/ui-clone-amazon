import React,{useState,useEffect} from "react";
import HeroSlider from "../../components/HeroSlider";
import Product from "../../components/Product";
import ConnectContext from "../../context/modules/connectContext";
import * as S from "./styles";

// function createProduct() {
//   return {
//     id: Math.floor(Math.random() * 10000),
//     name: "Xiaomi Redmi Note 9 128GB 4GB RAM - Versão Global - Midnight Grey",
//     brand: "Xiomi",
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/61VmUpCs7PL._AC_SX522_.jpg",
//     price: 1.55,
//     rating: 3,
//   };
// }

const products = [
  {
    id: '1',
    name: "Xiaomi Redmi Note 9 128GB 4GB RAM - Versão Global - Midnight Grey",
    brand: "Xiomi",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61VmUpCs7PL._AC_SX522_.jpg",
    price: 1.55,
    rating: 3,
  },
  {
    id: '2',
    name: "Bemol Smartphone Samsung Galaxy S20 G980 4G 128GB Tela 6,2'",
    brand: "Samsung",
    image:
      "https://d3ddx6b2p2pevg.cloudfront.net/Custom/Content/Products/10/51/1051092_smartphone-samsung-galaxy-s20-g980-4g-128gb-tela-6-2-camera-traseira-64mp-12mp-12mp-frontal-10mp-android-rosa_m3_637309430661191853.jpg",
    price: 1055.55,
    rating: 4,
  },
  {
    id: '3',
    name: "Smartphone Samsung Galaxy A20s 32GB Azul 4G - 3GB RAM Tela 6,5'",
    brand: "Samsung",
    image:
      "https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-a20s-32gb-azul-4g-3gb-ram-tela-65-cam-tripla-cam-selfie-8mp/magazineluiza/155569000/32da3a60a25242235652f3a4ab4d76c5.jpg",
    price: 1055.55,
    rating: 4,
  },
  {
    id: '4',
    name: " Casas Bahia Notebook Dell Pentium Gold 4GB 500GB Tela 15.6'",
    brand: "Dell",
    image:
      "https://www.casasbahia-imagens.com.br/Informatica/Notebook/50005139/1181573392/notebook-dell-pentium-gold-4gb-500gb-tela-15-6-windows-10-inspiron-i15-3583-a05p-50005139.jpg",
    price: 2599.00,
    rating: 4,
  },
  {
    id: '5',
    name: "Notebook Dell Inspiron 5480 I7 16gb Hd Ssd Nvidia",
    brand: "Dell",
    image:
      "https://http2.mlstatic.com/promoco-notebook-dell-inspiron-5480-i7-16gb-hd-ssd-nvidia-D_NQ_NP_974912-MLB33001599847_112019-F.jpg",
    price: 5055.55,
    rating: 4,
  },
  {
    id: '6',
    name: "Notebook Apple Macbook Mnyh2ll/a 256/12 Prata",
    brand: "Apple",
    image:
      "https://http2.mlstatic.com/notebook-apple-macbook-mnyh2lla-25612-prata-D_NQ_NP_963840-MLB27553730144_062018-O.jpg",
    price: 9700.00,
    rating: 4.7,
  },
  {
    id: '7',
    name: "Smartphone Samsung Galaxy A20s 32GB Azul 4G - 3GB RAM Tela 6,5'",
    brand: "Samsung",
    image:
      "https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-a20s-32gb-azul-4g-3gb-ram-tela-65-cam-tripla-cam-selfie-8mp/magazineluiza/155569000/32da3a60a25242235652f3a4ab4d76c5.jpg",
    price: 1055.55,
    rating: 4,
  },
  {
    id: '8',
    name: "Bemol Smartphone Samsung Galaxy S20 G980 4G 128GB Tela 6,2'",
    brand: "Samsung",
    image:
      "https://d3ddx6b2p2pevg.cloudfront.net/Custom/Content/Products/10/51/1051092_smartphone-samsung-galaxy-s20-g980-4g-128gb-tela-6-2-camera-traseira-64mp-12mp-12mp-frontal-10mp-android-rosa_m3_637309430661191853.jpg",
    price: 1055.55,
    rating: 4,
  },
]

const Home = ({ context }) => {

  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },1500)
    
  } ,[loading])

  return (
    <S.Container>
      <HeroSlider />
      <S.SectionProducts>
        {products
          .map((p) => (
            <Product
              key={p.id}
              data={{ ...p }}
              isLoading={loading}
              handleClick={context.addProductToCart}
            />
          ))}
      </S.SectionProducts>
    </S.Container>
  );
};

export default ConnectContext(Home);
