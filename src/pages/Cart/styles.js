import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 2rem auto;
  position: relative;

  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const ListWrapper = styled.ul`
  flex: 2 1 60rem;
  margin: 1rem;
`;
export const ItemCart = styled.li`
  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;

    img {
      object-fit: contain;
      width: 200px;
      height: 100px;
    }

    &:last-child {
      align-self: center;
    }
  }

  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #dedfe0;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  div {
    display: flex;
    align-items: center;
    select {
      background: transparent;
      border-color: #dedfe0;
      padding: 0.2rem;
      border-radius: 3px;
      margin-right: 10px;
    }
  }
  >span{
    font-size:1.5rem;
  }
`;

export const Action = styled.div`
  flex: 1 1 20rem;
  box-shadow: 0px 10px 15px #1b1c2029;
  padding: 1rem;
  margin: 1rem;
  > h3{
    font-size: 1.5rem;
  }
  
`;

export const Button = styled.button`
  padding: 1rem;
  border: 0.1rem #808080 solid;
  cursor: pointer;
  border-radius: 0.3rem;
  background: #f0c040;
  transition: background 300ms ease;
  
  margin-top: 2rem;

  display: flex;
  justify-content: center;

  &:hover {
    background: ${darken(0.15, "#f0c040")};
  }
`;
