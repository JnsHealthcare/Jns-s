import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignInForm from '../Form/SignInForm/SignInForm';
import SignUpForm from '../Form/SignUpForm/SignUpForm';
import KakaoAuth from './KakaoAuth';

type SignContainerProps = {
  type: string;
  onClick: () => void;
  inputValue: any;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SignContainer = ({
  type,
  onClick,
  inputValue,
  onChangeInput,
}: SignContainerProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  return (
    <Container>
      <SignSection>
        <Title>{type}</Title>
        {pathname === '/login' ? (
          <>
            <SignInForm formValue={inputValue} onChangeInput={onChangeInput} />
            <p
              onClick={() => {
                navigate('/signup');
              }}
              style={{ cursor: 'pointer' }}
            >
              아직 회원이 아니신가요 ?
            </p>
          </>
        ) : pathname === '/signup' ? (
          <SignUpForm formValue={inputValue} onChangeInput={onChangeInput} />
        ) : null}
        <Button onClick={onClick}>{type}</Button>
        {/* <img
          src={`${process.env.PUBLIC_URL}/images/Kakao/kakao.png`}
          alt="img"
          style={{
            width: '200px',
            height: '30px',
            cursor: 'pointer',
          }}
        /> */}
        <KakaoAuth />
      </SignSection>
    </Container>
  );
};

export default SignContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 100vh;
  background-color: #f9fbff;
`;

const SignSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
  width: 400px;
  /* border: 2px solid #6b986f; */
  border-radius: 8px;
  /* box-shadow: 0 0 5px #6b986f; */
`;

const Title = styled.section`
  font-size: 50px;
  margin: 10px 0;
  color: #6b986f;
`;

const Button = styled.button`
  width: 450px;
  height: 55px;
  margin: 10px 0;
  /* border: 2px solid #6b986f; */
  @include btnStyle;
  border-radius: 5px;
  background-color: transparent;
  &:hover {
    border: 2px solid #6b986f;
    background-color: #6b986f;
    transition: 0.2s;
  }
`;
