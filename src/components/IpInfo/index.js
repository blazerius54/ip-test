import React, { Component } from 'react';
import { InfoWrapper } from './styled';

class InputInfo extends Component {
  render() {
    const { city_rus, country_rus, region_rus, zip_code } = this.props.ipInfo;
    return (
      <InfoWrapper>
        <table>
          <tbody>
            <tr>
              <th colspan="2">
                <h3>Информация о ip-адресе</h3>
              </th>
              </tr>        
            <tr>
              <td>Город</td>
              <td>{city_rus}</td>
            </tr>
            <tr>
              <td>Страна</td>
              <td>{country_rus}</td>
            </tr>
            <tr>
              <td>Регион</td>
              <td>{region_rus}</td>
            </tr>
            <tr>
              <td>Индекс</td>
              <td>{zip_code}</td>
            </tr>
          </tbody>
        </table>
      </InfoWrapper>
    );
  }
}

export default InputInfo;
