import styled from 'styled-components';
import React from 'react';

const Input = styled.input.attrs((props) => {
  return {
    type: 'text',
    size: props.small ? 5 : undefined
  };
})`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  padding: ${(props) => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`;

export default (props) => {
  return (
    <>
      <Input small placeholder="Small" />
      <Input placeholder="Normal" />
      <Input padding="2em" placeholder="Padded" />
    </>
  );
};
