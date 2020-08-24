import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Container,
  ProductItem,
  Image,
  Name,
  Brand,
  Price,
  Rating,
} from "./styles";

import Loading from './Loading'

function Product({ data,isLoading }) {
  return (
    <>
    {isLoading ? 
      ( <Loading/>) :
      (
      ( 
        <Container>
          <ProductItem>
            <Image src={data.image} alt={data.name} />
            <Name>
              <Link to={`/product/${data.id}`}>{data.name}</Link>
            </Name>
            <Brand>{data.brand}</Brand>
            <Price>$ {data.price}</Price>
            <Rating>
              {data.rating} ({data.numReviews} reviews )
            </Rating>
          </ProductItem>
        </Container>
       ) 
      )}
    </>
  )
  
}

Product.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    brand: PropTypes.string,
    rating: PropTypes.number,
    numReviews: PropTypes.number,
    countInStock: PropTypes.number,
  }),
};

Product.defaultProps = {
  isLoading: true,
  data: {
    id: "",
    name: "",
    category: "",
    image: "",
    price: 0,
    brand: "",
    rating: 0,
    numReviews: 0,
    countInStock: 0,
  },
};

export default Product;
