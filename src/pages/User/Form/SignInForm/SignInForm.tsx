import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

type FormValue = {
  email: string;
  password: string;
};

type Props = {
  formValue: FormValue;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SignInForm = ({ formValue, onChangeInput }: Props) => {
  return (
    <Form>
      <Input
        type="text"
        placeholder="ID"
        value={formValue.email}
        name="email"
        onChange={onChangeInput}
      />
      <Input
        type="password"
        placeholder="PassWord"
        value={formValue.password}
        name="password"
        onChange={onChangeInput}
      />
    </Form>
  );
};

export default SignInForm;

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
