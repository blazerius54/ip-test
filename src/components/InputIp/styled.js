import styled from 'styled-components';

const InputWrapper = styled.div`
  flex-basis: 50%;
  display: flex;
  align-content: center;
  input {
    font-size: 120%;
    background: #f1f1f1;
    border: none;
    border-bottom: 1px solid #999;
    margin-right: 10px;
    text-align: center;
    transition: all 0.5s ease;
    &:focus {
      border-bottom-color: #5ee5e5;
    }
  }

  button {
    background-color: #83ea8d;

    &:hover {
      background-color: #aef9b5;
    }

    &:active {
      background-color: #6dad73;
    }
  }
`;

export default InputWrapper;
