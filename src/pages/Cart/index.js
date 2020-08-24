import React from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { FaMinusCircle } from "react-icons/fa";
import ConnectContext from "../../context/modules/connectContext";
import * as S from "./styles";

function Cart({ context }) {
  const {
    state: { cart },
    removeProductFromCart,
    updateProductFromCart,
  } = context;
  const history = useHistory();

  return (
    <S.Container>
      <S.ListWrapper>
        <li>
        
        </li>
        {!cart.basket.length ? (
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Seu carrinho está vazio. <Link to="/"> Voltar para home </Link>.
          </h3>
        ) : (
          cart.basket.map((product) => (
            <S.ItemCart key={product.id}>
              <div>
                <img src={product.image} alt={product.name} />
                <S.Product key={product}>
                  <span>
                    <b>{product.name}</b>
                  </span>
                  <div>
                    Qtd:
                    <select
                      onChange={(e) =>
                        updateProductFromCart(product, e.target.value)
                      }
                    >
                      {[...Array(product.countInStock).keys()].map((v) => (
                        <option key={v + 1} value={v + 1}>
                          {v + 1}
                        </option>
                      ))}
                    </select>
                    <FaMinusCircle
                      onClick={() => removeProductFromCart(product.id)}
                      color="#d6004a"
                    />
                  </div>
                </S.Product>
                <div>$ {product.qtd * product.price}</div>
              </div>
            </S.ItemCart>
          ))
        )}
      </S.ListWrapper>
      {cart.basket.length > 0 && (
        <S.Action>
          <h3>
            Subtotal: $
            {(cart.basket
              .map((v) => v.price * v.qtd)
              .reduce((acc, v) => acc + v)).toFixed(2)}
          </h3>
          <h3>
            Itens:
            {cart.basket.map((v) => v.qtd).reduce((acc, v) => (acc += Number(v) ))}
          </h3>
          <S.Button type="button" onClick={() => history.push("/checkout")}>
            Ir para checkout
          </S.Button>
        </S.Action>
      )}
    </S.Container>
  );
}

Cart.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

Cart.defaultProps = {
  history: {},
  match: {},
};

export default ConnectContext(Cart);
