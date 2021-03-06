import React, { Component } from 'react';
import Header from './components/Header';
import InputIp from './components/InputIp';
import InputInfo from './components/IpInfo';
import { AppWrapper, OptionsWrapper, Error } from './styled';
import { ipRegex } from './utils/regex';
import { ipRequest } from './utils/network';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ipAddress: '',
      ipInfo: null,
      errorMsg: null,
    };
  }

  componentDidMount() {
    if(localStorage.getItem('ip')) {
      this.setState({
        ipAddress: localStorage.getItem('ip'),
      });
    };
    if(localStorage.getItem('ipInfo')) {
      this.setState({
        ipInfo: JSON.parse(localStorage.getItem('ipInfo')),
      });
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
    this.setState({
      ipAddress,
    });
  };

  sendRequest = (ipAddress) => {
    const ipForRequst = ipAddress? ipAddress : '';
    localStorage.setItem('ip', this.state.ipAddress);
    ipRequest(ipForRequst)
      .then(response => 
        response.json().then(ipInfo => {
          this.setState({ ipInfo });
          localStorage.setItem('ipInfo', JSON.stringify(ipInfo));
        })
      ).catch(error => this.setState({
        errorMsg: 'Достигнут лимит запросов, попробуйте позже',
      }));
  };

  sendInputIp = () => {
    if (ipRegex.test(this.state.ipAddress)) {  
      this.sendRequest(this.state.ipAddress);
      this.setState({
        errorMsg: null,
      });
    } else {
      this.setState({
        errorMsg: 'Введите корректный ip-адресс',
      });
    }
  };

  sendEmptyIp = () => {
    this.sendRequest();
  };

  render() {
    const { ipAddress, ipInfo, errorMsg } = this.state;
    return (
      <AppWrapper>
        <Header />
        <OptionsWrapper>
          <InputIp sendInputIp={this.sendInputIp} ipAddress={ipAddress} validateIp={this.validateIp}/>
          <button onClick={()=>this.sendEmptyIp()}>проверить свой ip</button>
        </OptionsWrapper>
        {errorMsg && <Error>{errorMsg}</Error>}
        {ipInfo && <InputInfo ipInfo={ipInfo}/>}
      </AppWrapper>
    );
  }
}

export default App;
