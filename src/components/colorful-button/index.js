import styled from 'styled-components';
import React from 'react';

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;
const TomatoButton = styled(Button)`
  background: tomato;
`;

export default (props) => {
  return (
    <>
      <Button>I'm purple.</Button>
      <br />
      <TomatoButton>I'm red.</TomatoButton>
    </>
  );
};
