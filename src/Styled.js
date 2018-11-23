import styled from 'styled-components';

export const AppWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #555;
  font-family: Arial, Helvetica, sans-serif;

  button {
    padding: 10px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  input {
    &:focus {
      outline: none;
    }
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  margin-top: 50px;
  justify-content: space-between;

  & > button {
    flex-basis: 30%;
    background-color: #7babed;

    &:hover {
      background-color: #a2c3ef;
    }
    
    &:active {
      background-color: #6287ba;
    }
  
  }

  button {
    font-size: 110%;
    color: #555;
    cursor: pointer;
  }
`;

export const Error = styled.div`
  color: red;
  position: absolute;
  left: 0;
  right: 0;
  top: 220px;
  display: flex;
  justify-content: center;
`;
