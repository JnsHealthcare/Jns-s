import React from 'react';
import { Link } from 'react-router-dom';
import '../Product/Product.scss';

interface Option {
  id: number;
  image: string;
}

interface Props {
  id: number;
  ProductsName: string;
  imageUrl: string;
  price: number;
  options: Option[];
  name: string;
}

const Product = (props: Props) => {
  const { id, ProductsName, name, imageUrl, price } = props;
  console.log(id);
  return (
    <section className="eactProduct">
      <Link to={`/products/detail/${id}`}>
        <div className="imgBox">
          <img className="img" src={imageUrl} alt="상품" />
        </div>
        <p className="name">{ProductsName}</p>
        <p className="name">{name}</p>
        <p className="price">
          {Math.ceil(price)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
          KRW
        </p>
      </Link>
    </section>
  );
};

export default Product;
