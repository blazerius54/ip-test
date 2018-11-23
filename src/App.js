import React, { Component } from 'react';
import Header from './components/Header';
import InputIp from './components/InputIp';
import InputInfo from './components/IpInfo';
import { AppWrapper, OptionsWrapper } from './Styled';

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
      .then(response => response.json().then(ipInfo => this.setState({ipInfo})));
  };

  render() {
    const { ipAddress, ipInfo } = this.state;
    return (
      <AppWrapper>
        <Header />
        <OptionsWrapper>
          <InputIp sendRequest={this.sendRequest} ipAddress={ipAddress} validateIp={this.validateIp}/>
          <button>проверить свой ip</button>
        </OptionsWrapper>
        {ipInfo && <InputInfo ipInfo={ipInfo}/>}
      </AppWrapper>
    );
  }
}

export default App;
