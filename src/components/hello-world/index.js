import styled from 'styled-components';
import React from 'react';

const Title = styled.h1`
  font-size: 1.6em;
  text-align: right;
  color: red;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default class extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    );
  }
}
