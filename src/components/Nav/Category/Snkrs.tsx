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

  // useEffect(() => {
  //   fetch(`${API.myPage}?accountId=${''}`, {
  //     headers: { Authorization: localStorage.TOKEN },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  return <div></div>;
};

export default Snkrs;
