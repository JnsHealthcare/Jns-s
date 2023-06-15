import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../components/Product/Product';
import AsideMenu from '../../components/AsideMenu/AsideMenu';
import '../ProductList/ProductList.scss';
import { API } from '../../config/config';

interface Option {
  id: number;
  image: string;
  active: boolean;
}

interface ProductType {
  id: number;
  name: string;
  options: Option[];
}

const ProductList = () => {
  const [productList, setProductList] = useState<ProductType[]>([]);
  const { id } = useParams();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await fetch(`${API.products}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          const data = await response.json();
          setProductList(data?.data?.products || []);
        } else {
          console.error('Failed to fetch product list');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductList();
  }, []);

  const handleThumbnailClick = (productId: number, image: string) => {
    const updatedProductList = productList.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          options: product.options.map((option) => ({
            ...option,
            active: option.image === image,
          })),
        };
      }
      return product;
    });

    setProductList(updatedProductList);
  };

  return (
    <div className="productList">
      <h1 className="subTitle"></h1>
      <section className="listBox">
        <AsideMenu />
        <div className="listAlign">
          {productList.map((product: ProductType) => (
            <div className="productSlider" key={product.id}>
              <div className="thumbnailImages">
                {product.options.map((option: Option) => (
                  <img
                    key={option.id}
                    src={option.image}
                    alt={product.name}
                    onClick={() =>
                      handleThumbnailClick(product.id, option.image)
                    }
                    className={option.active ? 'active' : ''}
                  />
                ))}
              </div>
              <div className="productDetails">
                <div className="mainImage">
                  <img
                    src={
                      product.options.find((option) => option.active)?.image ||
                      ''
                    }
                    alt={product.name}
                  />
                </div>
                <Product
                  id={product.id}
                  ProductsName={product.name}
                  name={product.name}
                  imageUrl={
                    product.options.find((option) => option.active)?.image || ''
                  }
                  price={0}
                  key={product.id}
                  options={product.options}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductList;
