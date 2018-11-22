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
      ipAddress: '',
    };
  }

  validateIp = e => {
    const regex = /^[0-9.\b]+$/;
    const { value } = e.target;
    if (value === '' || regex.test(value)) {
      this.setIpAddress(value);
    }
  };

  setIpAddress = ipAddress => {
    console.log(ipAddress);
    this.setState({
      ipAddress,
    });
  };

  sendRequest = () => {
    

    fetch(
      `https://api.2ip.ua/geo.json?ip=8.8.8.8`,
    )
      .then(response => {
        if (response.status !== 200) {
          return;
        }
        return response;
      })
      .then(response => response.json().then(response => console.log(response)));
  };

  render() {
    return (
      <InputWrapper>
        <input type="text" placeholder="Введите ip-адрес" value={this.state.ipAddress} onChange={(e)=>this.validateIp(e)}/>
        <button onClick={()=>this.sendRequest()}>проверить</button>
      </InputWrapper>
    );
  }
}

export default InputIp;
