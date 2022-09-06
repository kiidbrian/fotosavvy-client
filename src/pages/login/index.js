import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  margin-bottom: 50px;
`;

const LoginButton = styled.button`
  border: 2px solid #000;
  font-size: 16px;
  font-weight: 700;
  ${'' /* max-width: 189px; */}
  padding: 15px 130px;
  letter-spacing: 0.08em;
  border-radius: 0;
  text-align: center;
  text-transform: uppercase;
  color: #323232;
  line-height: normal;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 col-12"></div>
        <div className="col-md-4">
          <ImageWrapper>
            <img src="img/pixessa.png" alt="" />
          </ImageWrapper>
          <LoginWrapper>
            <LoginButton
              type="button"
              className="btn btn-outline-dark"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </LoginButton>
          </LoginWrapper>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default LoginPage;
