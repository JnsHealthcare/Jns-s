import React, { useState, useEffect } from 'react';
// import Snkrsitem from './Snkrsitem';
import './Snkrsdrop.scss';

const Snkrsdrop = () => {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch(`http://10.58.52.128:3000/draws/products`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  //   console.log(data);
  //   console.log(data.message);

  return (
    <div className="snkrsDrop">
      <section className="snkrsList">
        {/* {data.message?.map((item) => {
          return <Snkrsitem key={item.id} {...item} />;
        })} */}
      </section>
    </div>
  );
};

export default Snkrsdrop;
