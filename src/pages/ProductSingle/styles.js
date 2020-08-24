import styled from "styled-components";
import { darken } from "polished";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 2rem auto;

  position: relative;
`;

export const BackAction = styled(Link)`
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: ${darken(0.3, "#c8cece")};

  display: flex;
  align-items: center;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  padding: 1rem;
`;
export const Image = styled.div`
  flex: 2 1 60rem;

  img {
    width: 100%;
    max-width: 60rem;
  }
`;
export const Info = styled.div`
  padding: 2rem;
  flex: 1 1 30rem;

  li {
    > h4{
      font-size: 2rem;
    }
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const Action = styled.div`
  flex: 1 1 30rem;

  ul {
    border-radius: 0.3rem;
    box-shadow: 0px 10px 15px #1b1c2029;
    padding: 2rem;

    li {
      margin-bottom: 1rem;
    }

    li:last-child {
      display: flex;
      flex-direction: column;
    }
  }
`;
export const Button = styled.button`
  padding: 1rem;
  border: 0.1rem #808080 solid;
  cursor: pointer;
  border-radius: 0.3rem;
  background: #f0c040;
  transition: background 300ms ease;

  display: flex;
  justify-content: center;

  &:hover {
    background: ${darken(0.15, "#f0c040")};
  }
`;
