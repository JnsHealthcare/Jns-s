import React, { useRef, useEffect, useState } from 'react';

interface Props {
  id: number;
  img: string;
  title: string;
  text: string;
}

const Content = (props: Props) => {
  const { id, img, title, text } = props;
  const [position, setPosition] = useState(window.scrollY);
  const [opacity, setOpacity] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    setPosition(window.scrollY);
    if (ref.current) {
      setOpacity((position / id - 200) / ref.current.offsetHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [opacity]);

  return (
    <div className="content" ref={ref} style={{ opacity }}>
      <section className="imgBox">
        <img className="contentImg" src={img} alt="메인컨텐츠이미지" />
      </section>
      <section className="textBox">
        <p className="title">{title}</p>
        <p className="text">{text}</p>
        <button>구매하기</button>
      </section>
    </div>
  );
};

export default Content;
