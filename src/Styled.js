import styled from 'styled-components';

export const AppWrapper = styled.div`
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
  }
`;