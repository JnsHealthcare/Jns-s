import React from 'react';
import Category from './Category/Category';
import Snkrs from './Category/Snkrs';
import Sideoption from './Sideoption/Sideoption';
import CATEGORY_DATA from './categoryData';
import './Nav.scss';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const interruptedRoute = ['signup', 'login'];

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const isHideNav = interruptedRoute.some((path) => pathname.includes(path));
  const navigate = useNavigate();

  if (isHideNav) return;

  return (
    <div className="navBar">
      {/* <img src="/images/nike_logo.png" alt="logo" /> */}
      <span style={{ fontSize: '25px' }}>Lime</span>
      <span
        style={{ fontSize: '25px', cursor: 'pointer' }}
        onClick={() => {
          navigate('/about');
        }}
      >
        about
      </span>
      <section className="category">
        <span
          style={{ fontSize: '25px', cursor: 'pointer' }}
          onClick={() => {
            navigate('/products');
          }}
        >
          prodict
        </span>
        {/* <ul className="navList">
          {CATEGORY_DATA.map((category: any) => {
            return (
              <Category
                key={category.id}
                name={category.name}
                carousel={category.carousel}
                url={category.url}
              />
            );
          })}
          <Snkrs />
        </ul> */}
      </section>
      <Sideoption />
    </div>
  );
};

export default Nav;
