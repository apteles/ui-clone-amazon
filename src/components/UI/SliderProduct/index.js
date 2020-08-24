import React, { useRef } from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

function ProductSlider({ featured, gallery }) {
  const imageFeaturedRef = useRef();

  const onHandleThumb = (e) => {
    imageFeaturedRef.current.src = e.target.src;
  };
  return (
    <S.Container>
      <S.ImageFeatured ref={imageFeaturedRef} src={featured} />
      <S.SlideWrapper>
        <S.Slide>
          {[featured,...gallery].map((thumb) => (
            <S.Thumb key={thumb} src={thumb} onMouseOver={onHandleThumb} />
          ))}
        </S.Slide>
      </S.SlideWrapper>
    </S.Container>
  );
}

ProductSlider.propTypes = {
  featured: PropTypes.string.isRequired,
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ProductSlider.defaultProps = {
  featured: "",
  gallery: [],
};

export default ProductSlider;
