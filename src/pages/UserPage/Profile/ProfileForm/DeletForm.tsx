import React from 'react';
import styled from 'styled-components';

const DeleteForm = ({ value, onChangeHandler, onClick }: any) => {
  return (
    <>
      <Input type="password" value={value} onChange={onChangeHandler} />
      <Input type="button" value="submit" onClick={onClick} />
    </>
  );
};

export default DeleteForm;

const Input = styled.input``;
