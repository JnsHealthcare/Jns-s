import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  name: string;
  onClick: () => void;
};

const Button = ({ name, onClick }: ButtonProps) => {
  return <Btn onClick={onClick}>{name}</Btn>;
};

export default Button;

const Btn = styled.button`
  padding: 5px 10px;
  width: max-content;
  height: max-content;
  background-color: #fff;
  border: 2px solid #79b99d;
  border-radius: 3px;
  &:hover {
    background-color: #79b99d;
  }
  &:active {
    transition: 0.1s;
    border: 2px solid #79b99d;
    background-color: #79b99d;
  }
`;
