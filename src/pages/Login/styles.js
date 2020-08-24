import styled from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
`;

export const Form = styled.form`
  width: 400px;
  box-shadow: 0px 10px 15px #1b1c2029;
  border-radius: 3px;
  padding: 8rem 4rem;
  label {
    font-size: 14px;
    color: darkslateblue;
  }
  input {
    width: 100%;
    display: block;
    margin-top: 8px;
    padding: 7px;
    font-size: 16px;
    color: linear-gradient(-90deg, #f0c040, #d39e11);
    border-radius: 2px;
    border: 1px solid #ccddef;
    outline-color: linear-gradient(-90deg, #f0c040, #d39e11);
  }

  span {
    display: inline-block;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
    a {
      outline-color: linear-gradient(-90deg, #f0c040, #d39e11);
    }
  }
`;
export const InputWrapper = styled.div`
  margin-bottom: 20px;
`;
export const Button = styled.button`
  padding: 1rem;
  border: 0.1rem #808080 solid;
  cursor: pointer;
  border-radius: 0.3rem;
  background: linear-gradient(-90deg, #f0c040, #d39e11);
  transition: background 300ms ease-in;
  width: 100%;
  display: flex;
  justify-content: center;

  &:hover {
    background: linear-gradient(
      -90deg,
      ${darken(0.15, "#f0c040")},
      ${lighten(0.15, "#d39e11")}
    );
  }
`;
