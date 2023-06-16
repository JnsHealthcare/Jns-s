import React from 'react';
import { Link } from 'react-router-dom';
import '../Product/Product.scss';
import { styled } from 'styled-components';

interface Props {
  id: number;
  imageUrl: string;
}

const Product = ({ id, imageUrl }: Props) => {
  console.log(imageUrl);

  console.log(id);
  return (
    // <section className="eactProduct">
    <ImgCard>
      <Img src={imageUrl} alt="상품" />
    </ImgCard>
    // </section>
  );
};

{
  /* <Link to={`/products/detail/${id}`}>
<div className="imgBox">
  <img className="img" src={imageUrl} alt="상품" />
</div>
</Link> */
}

export default Product;

const ImgCard = styled.div`
  width: 200px;
  height: 200px;
  margin: auto;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
