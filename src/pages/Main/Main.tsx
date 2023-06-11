import React from 'react';
import Content from './Content/Content';
import './Main.scss';
import MAIN_DATA from './mainData';

interface Data {
  id: string;
  img: string;
  title: string;
  text: string;
}

interface DataType {
  data: Data[];
}

const Main = () => {
  return (
    <div>
      <section className="firstPage">
        <div className="alignSlogan">
          <p>YOU ARE MORE THAN</p>
          <p>YOU THINK YOU ARE</p>
        </div>
      </section>
      {MAIN_DATA.map((data: any) => {
        return (
          <Content
            key={data.id}
            id={data.id}
            img={data.img}
            title={data.title}
            text={data.text}
          />
        );
      })}
    </div>
  );
};

export default Main;
