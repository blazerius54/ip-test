import React, { Component } from 'react';
import InputWrapper from './styled';

/* eslint-disable react/prefer-stateless-function */
class InputIp extends Component {
  render() {
    const { ipAddress, validateIp, sendInputIp } = this.props;
    return (
      <InputWrapper>
        <input type="text" placeholder="Введите ip-адрес" value={ipAddress} onChange={e => validateIp(e)} />
        <button type="button" onClick={() => sendInputIp()}>проверить</button>
      </InputWrapper>
    );
  }
}

export default InputIp;
