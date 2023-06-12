import React, { useState } from 'react';
import './Snkrsitem.scss';

interface Props {
  image_url: string;
  name: string;
}

const Snkrsitem = (props: Props) => {
  const { image_url, name } = props;
  const [isHoverContent, setIsHoverContent] = useState('');

  const openHeight = () => {
    setIsHoverContent('show');
  };

  const closeHeight = () => {
    setIsHoverContent('');
  };

  return (
    <div
      className="itemList"
      onMouseEnter={openHeight}
      onMouseLeave={closeHeight}
    >
      <div className="eventSection">
        <img src={image_url} alt="드로우 상품" />
        <section className={`textSection ${isHoverContent ? 'show' : ''}`}>
          <p className="bold">{name}</p>
        </section>
      </div>
    </div>
  );
};

export default Snkrsitem;
