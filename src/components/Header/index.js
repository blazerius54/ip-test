import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.header`
  margin-top: 40px;
`;

class Header extends Component {
  render() {
    return (
      <Title>
        <h2>Проверьте ip-адресс</h2>
      </Title>
    );
  }
}

export default Header;
