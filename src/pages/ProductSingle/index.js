import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import PropTypes from "prop-types";
import ConnectContext from "../../context/modules/connectContext";
import * as S from "./styles";
import Slider from "../../components/UI/SliderProduct";

const gallery = [
  "https://via.placeholder.com/500x376?text=Photo+1",
  "https://via.placeholder.com/500x376?text=Photo+2",
  "https://via.placeholder.com/500x376?text=Photo+3",
  "https://via.placeholder.com/500x376?text=Photo+4",
  "https://via.placeholder.com/500x376?text=Photo+5",
];

function ProductSingle({ match, context }) {
  const [qtd, setQtd] = useState(1);
  //const product = createProduct();
  const { state: {product: {product}}, addProductToCart,findProduct } = context;
  const params = useParams()
  
  console.log(product);

  useEffect(() => {
    findProduct(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
       {product.product && (

        <S.Container>
        <S.BackAction to="/">
          <MdKeyboardArrowLeft /> Voltar para Loja
        </S.BackAction>

        <S.Details>
          {gallery && <Slider featured={product.product.image} gallery={gallery} />}

          <S.Info>
            <ul>
              <li>
                <h4>{product.product.name}</h4>
              </li>
              <li>
                {product.product.stars} Stars ({product.product.numReviews}) Reviews
              </li>
              <li>
                Preço: <b>${product.product.price}</b>
              </li>
              <li>
                Descrição:
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  magni quia nulla enim necessitatibus doloribus.
                </div>
              </li>
            </ul>
          </S.Info>
          <S.Action>
            <ul>
              <li>Preço: R$90</li>
              <li>
                Status:
                {product.product.countInStock > 0 ? (
                  <span> Em estoque</span>
                ) : (
                  <span> Produto indisponivél</span>
                )}
              </li>
              <li>
                Qtd:
                <select value={qtd} onChange={(e) => setQtd(e.target.value)}>
                  {[...Array(product.product.countInStock).keys()].map((v) => (
                    <option key={v + 1} value={v + 1}>
                      {v + 1}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                {product.product.countInStock > 0 ? (
                  <S.Button
                    type="button"
                    onClick={(_) => addProductToCart({ ...product.product, qtd })}
                  >
                    <FaCartPlus size={14} /> adicionar
                  </S.Button>
                ) : (
                  <div>Produto indisponivél</div>
                )}
              </li>
            </ul>
          </S.Action>
        </S.Details>
        </S.Container>

        )}
    </>
   
   
  );
}

ProductSingle.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

ProductSingle.defaultProps = {
  history: {},
  match: {},
};
export default ConnectContext(ProductSingle);
