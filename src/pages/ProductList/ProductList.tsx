import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../components/Product/Product';
import AsideMenu from '../../components/AsideMenu/AsideMenu';
import '../ProductList/ProductList.scss';
import { API } from '../../config/config';

const data = [
  { id: 1, img: 'images/Nav/backBtn.png' },
  { id: 2, img: 'images/Nav/delete.png' },
  { id: 3, img: 'images/Nav/fowardBtn.png' },
  { id: 4, img: 'images/Nav/Lime.png' },
];

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  console.log(productList);
  const { id } = useParams();

  const [index, setIndex] = useState(0);

  console.log(data.length);

  const clickHandler = () => {
    if (index === data.length - 1) {
      setIndex(1);
    } else if (index < data.length) {
      setIndex((prev) => prev + 1);
    }
  };
  console.log(index);

  console.log(data[index].img);

  console.log(API.products);

  // useEffect(() => {
  //   fetch(`${API.products}`, {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   }).then((res) => res.json());
  // }, []);

  useEffect(() => {
    fetch(`${API.products}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="productList">
      <h1 className="subTitle"></h1>
      <section className="listBox">
        <AsideMenu />
        <div className="listAlign">
          {/* <span className=" font-bold">{data[index].img}</span> */}
          {/* {productList.map((product) => {
            return <Product key={product.id} {...product} />;
          })} */}
          {/* <img src={data[index].img} alt="123" width={200} /> */}
          {/* <button onClick={clickHandler}>123</button> */}
        </div>
      </section>
    </div>
  );
};

export default ProductList;
