import { type } from 'os';
import React from 'react';
import styled from 'styled-components';

type InputType = {
  email: string;
};

const Email = () => {
  return (
    <Form>
      <Input></Input>
    </Form>
  );
};

export default Email;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* line-height: 10px; */
`;

const Input = styled.input`
  margin-top: 3px;
  padding: 5px;
  /* line-height: 20px; */
  width: 450px;
  height: 55px;
  border: 2px solid #c9f9dc;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: #8edfc1;
  }
`;
