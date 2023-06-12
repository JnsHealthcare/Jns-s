import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignContainer from './SignContainer/SignConatainer';
import { API } from '../../config/config';

const LoginPage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<any>({
    email: '',
    password: '',
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const signInHandler = () => {
    fetch(`${API.login}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...inputValue }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === '정상 처리') {
          localStorage.setItem('TOKEN', res?.data?.token);
          console.log(res.data.token);
          // localStorage.setItem('ISADMIN', res?.data?.isAdmin);
          navigate('/');
        } else if (res.message === 'Given email is not found in DB') {
          alert('아이디를 확인하세요');
        } else if (res.message === 'Passed in wrong password') {
          alert('비밀번호를 확인하세요');
        } else if (res.message === 'The given email is blocked') {
          alert('차단된 사용자 입니다');
        }
      });
  };

  return (
    <SignContainer
      type="Sign In"
      onClick={signInHandler}
      inputValue={inputValue}
      onChangeInput={onChangeInput}
    />
  );
};

export default LoginPage;
