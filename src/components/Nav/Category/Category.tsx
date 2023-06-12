import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

interface Props {
  name: string;
  carousel: boolean;
  url: string;
}

const Category = (props: Props) => {
  const { name, carousel, url } = props;
  const [isVisible, setisVisible] = useState(false);

  const onMouseEnter = () => {
    setisVisible(true);
  };
  const onMouseExit = () => {
    setisVisible(false);
  };
  return (
    <div
      className="categoryText"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseExit}
    >
      <Link to={url}>
        <li>{name}</li>
      </Link>
      {isVisible ? (
        <Dropdown className="dropDown" carousel={carousel} url={url} />
      ) : (
        <Dropdown className="dropDownHidden" carousel={carousel} url={url} />
      )}
    </div>
  );
};

export default Category;
