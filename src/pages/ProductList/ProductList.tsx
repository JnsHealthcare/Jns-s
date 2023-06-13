import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import "../ProductList/ProductList.scss";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const { id } = useParams();

  //   useEffect(() => {
  //     fetch(`http://10.58.52.128:3000/products/category/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setProductList(data.messgae);
  //       });
  //   }, [id]);

  return (
    <div className="productList">
      <h1 className="subTitle"></h1>
      <section className="listBox">
        <AsideMenu />
        <div className="listAlign">
          <span className=" font-bold">123</span>
          {/* {productList.map((product) => {
            return <Product key={product.id} {...product} />;
          })} */}
        </div>
      </section>
    </div>
  );
};

export default ProductList;
