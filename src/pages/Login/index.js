import React, { useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useHistory } from "react-router-dom";
import ConnectContext from "../../context/modules/connectContext";
import { Container, Form, InputWrapper, Button } from "./styles";
const loading = false;

function Login({ context, location }) {
  const {
    signUpRequest,
  } = context;
  const [authMode, setAuthMode] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!authMode) {
      signUpRequest(email, password, function(){
        history.push('/login')
        setAuthMode(true)
      });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <label htmlFor="login-email">
            Email
            <input
              type="email"
              id="login-email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="login-password">
            Password
            <input
              type="password"
              id="login-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </InputWrapper>
        {!authMode && (
          <InputWrapper>
            <label htmlFor="confirm-password">
              Confirme Password
              <input type="password" id="confirm-password" />
            </label>
          </InputWrapper>
        )}

        <Button type="submit">
          {loading ? (
            <ScaleLoader height={15} />
          ) : !authMode ? (
            "Register"
          ) : (
            "Login"
          )}
        </Button>
        <span
          onClick={() => setAuthMode(!authMode)}
          role="button"
          tabIndex="0"
          onKeyDown={() => setAuthMode(!authMode)}
        >
          {!authMode ? "I already have an account" : "register account"}
        </span>
      </Form>
    </Container>
  );
}

export default ConnectContext(Login);
