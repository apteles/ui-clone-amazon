import styled from "styled-components";

export const Container = styled.div`
  max-width: 34rem;
  flex: 0 1 34rem;
  width: 100%;
  margin: 1rem;
  padding: 1.5rem;
  height: 50rem;
  box-shadow: 0px 10px 15px #1b1c2029;
  border-radius: 3px;
  background: #fff;
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Image = styled.img`
  /* padding-left: 1.5rem; */

  max-height: 34rem;
  width: 100%;
  /* max-height: 230px; */
  object-fit: contain;
  margin-bottom: 20px;
`;

export const Name = styled.div`
  padding-left: 1.5rem;

  font-size: 1.5rem;
  font-weight: 600;
`;
export const Brand = styled.div`
  padding-left: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #808080;
`;
export const Price = styled.div`
  padding-left: 1.5rem;

  font-size: 2.5rem;
`;
export const Rating = styled.div`
  padding-left: 1.5rem;
  margin-bottom: 1rem;
`;
