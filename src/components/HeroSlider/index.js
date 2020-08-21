import React from "react";
import * as S from "./styles";

const images = [
  {
    url:
      "https://images-na.ssl-images-amazon.com/images/G/32/OHL/2020/March/SSAP/Appliance/washingmachine/PrimeHome_1500x600_1X_pt_BR._CB409517251_.jpg",
    alt: "foo",
  },
  {
    url:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg",
    alt: "bar",
  },
  {
    url:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg",
    alt: "foobaz",
  },
];

const settings = {
  dots: true,
  arrows: true,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const HeroSlider = () => {
  return (
    <S.Container>
      <img src={images[2].url} alt={images[2].alt} />
    </S.Container>
  );
};

export default HeroSlider;
