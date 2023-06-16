import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import Product from '../../components/Product/Product';
import AsideMenu from '../../components/AsideMenu/AsideMenu';
import '../ProductList/ProductList.scss';
import { API } from '../../config/config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

interface Option {
  id: number;
  image: string;
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

  console.log(productList);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(productList[0]);

  return (
    <Container>
      {productList?.map((d: any) => {
        return (
          <Wrapper key={d.id}>
            <TitleSection>
              <Title>{d.name}</Title>
            </TitleSection>
            <Slider {...settings}>
              {productList[0]?.options.map((option: Option) => {
                return (
                  <Product
                    id={option.id}
                    imageUrl={option.image}
                    key={option.id}
                  />
                );
              })}
            </Slider>
          </Wrapper>
        );
      })}
      {/* <Wrapper>
        <Slider {...settings}>
          {productList[0]?.options.map((option: Option) => {
            return (
              <Product id={option.id} imageUrl={option.image} key={option.id} />
            );
          })}
        </Slider>
      </Wrapper> */}

      {/* </SliderSection> */}
    </Container>
  );
};

export default ProductList;

const Container = styled.div`
  /* width: 1024px; */
  /* margin-bottom: 20px; */
  /* background-color: #111; */
  /* height: 300px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #111;
  padding: 20px;
  margin-top: 68px;
`;

const Wrapper = styled.div`
  width: 300px;
  margin: 20px;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 24px;
`;

const SliderSection = styled(Slider)`
  .slick-slide {
    pointer-events: none;
  }
  .slick-active {
    pointer-events: auto;
  }
`;

{
  /* <Slider {...settings}>
          {productList[0]?.options.map((option: Option) => {
            return (
              <Product id={option.id} imageUrl={option.image} key={option.id} />
            );
          })}
        </Slider> */
}

{
  /* {productList.map((product: ProductType) => ( */
}

{
  /* {productList.map((product: ProductType) => (
            <Slider {...settings} key={product.id}>
              {product.options.map((option: Option) => (
                <Product
                  id={product.id}
                  ProductsName={product.name}
                  name={product.name}
                  imageUrl={option.image}
                  price={230}
                  key={option.id}
                  options={product.options}
                />
              ))}
            </Slider>
          ))} */
}
