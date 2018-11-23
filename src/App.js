import React, { Component } from 'react';
import Header from './components/Header';
import InputIp from './components/InputIp';
import InputInfo from './components/IpInfo';
import { AppWrapper, OptionsWrapper } from './Styled';
import { ipRegex } from './utils/regex';
import { ipRequest } from './utils/network';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ipAddress: '',
      ipInfo: {
        city_rus: "Маунтин-Вью",
        country_rus: "США",
        region_rus: "Калифорния",
        zip_code: "94043",
      },
      error: null,
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

  sendRequest = (ipAddress) => {
    const ipForRequst = ipAddress? ipAddress : '';
    ipRequest(ipForRequst)
      .then(response => 
        response.json().then(ipInfo => this.setState({ ipInfo }))
      );
  };

  sendInputIp = () => {
    if (ipRegex.test(this.state.ipAddress)) {  
      this.sendRequest(this.state.ipAddress);
    } else {
      this.setState({
        error: 'Введите корректный ip-адресс'
      });
    }
  };

  sendEmptyIp = () => {
    this.sendRequest();
  };

  render() {
    const { ipAddress, ipInfo } = this.state;
    return (
      <AppWrapper>
        <Header />
        <OptionsWrapper>
          <InputIp sendInputIp={this.sendInputIp} ipAddress={ipAddress} validateIp={this.validateIp}/>
          <button onClick={()=>this.sendEmptyIp()}>проверить свой ip</button>
        </OptionsWrapper>
        {ipInfo && <InputInfo ipInfo={ipInfo}/>}
      </AppWrapper>
    );
  }
}

export default App;
