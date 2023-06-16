import React, { useState } from 'react';
import { API } from '../../../config/config';

const KakaoAuth = () => {
  console.log(API.kakao);
  const kakaoLoginHandle = () => {
    fetch(API.kakao, { headers: { Origin: 'https://localhost:3000' } })
      .then((response) => {
        if (!response.ok) {
          throw new Error('카카오 로그인 요청이 실패했습니다.');
        }
        return response.json();
      })
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  return (
    <div onClick={kakaoLoginHandle}>
      <img
        src={`${process.env.PUBLIC_URL}/images/Kakao/kakao.png`}
        alt="img"
        style={{
          width: '450px',
          height: '50px',
        }}
      />
    </div>
  );
};

export default KakaoAuth;
