import React, { ChangeEvent, useRef } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValue = {
  name: string;
  email: string;
  password: string;
  date: string;
  phoneNumber: string;
};

type Props = {
  formValue: FormValue;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SignUpForm = ({ formValue, onChangeInput }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();
  const onSubmit: SubmitHandler<FormValue> = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Name"
        value={formValue.name}
        // name="name"
        // onChange={onChangeInput}
        {...register('name', {
          required: '필수입력값입니다',
          minLength: { value: 5, message: '5글자 이상 입력해주세요' },
          maxLength: { value: 15, message: '15자 이하로 입력해주세요' },
        })}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <Input
        type="Email"
        placeholder="Email"
        value={formValue.email}
        {...register('email', {
          required: '필수입력값입니다',
          minLength: { value: 8, message: '8자 이상 입력해주세요' },
          maxLength: { value: 15, message: '15자 이하로 입력해주세요' },
        })}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <Input
        type="password"
        placeholder="Password"
        value={formValue.password}
        name="password"
        onChange={onChangeInput}
      />
      <Input
        type="date"
        placeholder="Date"
        value={formValue.date}
        name="birthDate"
        onChange={onChangeInput}
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        value={formValue.phoneNumber}
        name="phoneNumber"
        onChange={onChangeInput}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default SignUpForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  margin-top: 3px;
  padding: 5px;
  width: 450px;
  height: 55px;
  border: 2px solid #8edfc1;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: #7594dd;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #8edfc1;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #7594dd;
  }
`;

const ErrorMessage = styled.span`
  color: red;
`;
