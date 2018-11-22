import React, { Component } from 'react';
import Header from './components/Header';
import InputIp from './components/InputIp';
import { AppWrapper, OptionsWrapper } from './Styled';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <OptionsWrapper>
          <InputIp />
          <button>проверить свой ip</button>
        </OptionsWrapper>
      </AppWrapper>
    );
  }
}

export default App;
