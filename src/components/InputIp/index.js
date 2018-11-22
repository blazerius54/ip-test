import React, { Component } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  flex-basis: 50%;
  display: flex;
  align-content: center;
  input {
    font-size: 120%;
    border: none;
    border-bottom: 1px solid #999;
    margin-right: 10px;
    text-align: center;
  }

  button {
    background-color: #ebf442;
  }
`;

class InputIp extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <InputWrapper>
        <input type="text" placeholder="Введите ip-адрес"/>
        <button>проверить</button>
      </InputWrapper>
    );
  }
}

export default InputIp;
