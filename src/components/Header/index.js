import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background:
    linear-gradient(
      to left, 
      #f2f2f2 0%,
      #c4c4c4 30%,
      #c4c4c4 60%,
      #f2f2f2 100%
    )
    left 
    bottom
    no-repeat; 
  background-size:100% 2px ;
`;

class Header extends Component {
  render() {
    return (
      <Title>
        <h2>Проверьте ip-адрес</h2>
      </Title>
    );
  }
}

export default Header;
