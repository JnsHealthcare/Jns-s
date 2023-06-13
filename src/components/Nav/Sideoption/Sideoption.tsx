import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Search from './Search/Search';
import './Sideoption.scss';

const UseSideOption = () => {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.TOKEN;
  const name = localStorage.name;

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <section className="sideOption">
      {/* <Search /> */}
      <div className="iconBox">
        <img
          className="sideIcon"
          src="/images/Nav/cardinal-point.png"
          alt="매장찾기"
        />
        <img
          className="sideIcon"
          src="/images/Nav/setIcon.png"
          alt="고객센터"
        />
        <img className="sideIcon" src="/images/Nav/heartIcon.png" alt="찜" />
        <img
          className="sideIcon"
          src="/images/Nav/shoppingIcon.png"
          alt="장바구니"
        />
        {isLoggedIn ? (
          <li>{name}</li>
        ) : (
          <img
            className="sideIcon"
            src="/images/Nav/userIcon.png"
            alt="내정보"
            onClick={handleLoginClick}
          />
        )}
      </div>
    </section>
  );
};

export default UseSideOption;
