import React, { useState } from 'react';
import Snkrsdrop from '../Dropdown/Snkrsdrop';

const Snkrs = () => {
  const [isVisible, setisVisible] = useState(false);

  const onMouseEnter = () => {
    setisVisible(true);
  };
  const onMouseExit = () => {
    setisVisible(false);
  };
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit}>
      <li>SNKRS</li>
      {isVisible && <Snkrsdrop />}
    </div>
  );
};

export default Snkrs;
