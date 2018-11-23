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

    &:hover {
      background-color: #e5ea88;
    }

    &:active {
      background-color: #bcc157;
    }
  }
`;

class InputIp extends Component {
  render() {
    const { ipAddress, validateIp, sendInputIp } = this.props;
    return (
      <InputWrapper>
        <input type="text" placeholder="Введите ip-адрес" value={ipAddress} onChange={(e)=>validateIp(e)}/>
        <button onClick={()=>sendInputIp()}>проверить</button>
      </InputWrapper>
    );
  }
}

export default InputIp;
