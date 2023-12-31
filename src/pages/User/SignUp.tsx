import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignContainer from './SignContainer/SignConatainer';
import { API } from '../../config/config';

const SignUp = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<any>({
    name: '',
    email: '',
    password: '',
    birthDate: '',
    phoneNumber: '',
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const signUpHandler = () => {
    fetch(`${API.signup}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...inputValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        if (data.message === '정상 처리') {
          alert('가입을 축하합니다');
          navigate('/');
        } else if (data.message === 'The email is already in use') {
          alert('이미 가입된 이메일입니다');
        } else if (data.message === "It's an invalid email address") {
          alert('이메일을 확인해주세요');
        } else if (data.message === "It's an invalid password") {
          alert('비밀번호를 확인해주세요');
        }
      });
  };

  return (
    <SignContainer
      type="Lime Login"
      onClick={signUpHandler}
      formValue={inputValue}
      onChangeInput={onChangeInput}
    />
  );
};

export default SignUp;
