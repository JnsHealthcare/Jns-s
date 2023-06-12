import React, { useState, useEffect } from 'react';
import Snkrsdrop from '../Dropdown/Snkrsdrop';
import { useNavigate, Link } from 'react-router-dom';
import { API } from '../../../config/config';

const Snkrs = () => {
  const [data, setData] = useState<any>([]);
  const [isVisible, setisVisible] = useState(false);
  const navigate = useNavigate();

  const onMouseEnter = () => {
    setisVisible(true);
  };
  const onMouseExit = () => {
    setisVisible(false);
  };
  console.log(localStorage.TOKEN);

  // useEffect(() => {
  //   fetch(`${API.myPage}?accountId=${''}`, {
  //     headers: { Authorization: localStorage.TOKEN },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  console.log(data);
  return (
    <div>
      {localStorage.TOKEN ? <div></div> : <div></div>}
      <li
        onClick={() => {
          navigate('/login');
        }}
      >
        Login
      </li>
    </div>
  );
};

export default Snkrs;
