import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Search from './Search/Search';
import './Sideoption.scss';

const sideOption = () => {
  // const navigate = useNavigate();

  const toGoCart = () => {};

  const toGoLike = () => {};

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
        <Link to="/auth/signup">
          <img
            className="sideIcon"
            src="/images/Nav/userIcon.png"
            alt="내정보"
          />
        </Link>
      </div>
    </section>
  );
};

export default sideOption;
