import styled from 'styled-components';

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: black;

  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 1px solid #fff;
  border-radius: 4px;
  width: 100%;
  padding: 0 20px;
  height: 60px;
  color: black;
  border-radius: 2px;
  background-color: #ffffff;
  margin-bottom: 20px;
  font-size: 15px;

  &::placeholder {
    color: #73a1c2;
  }
  /* margin-bottom: 10px; */
`;

export const Error = styled.span`
  font-size: 11px;
  font-weight: bold;
  color: black;

  margin-top: 4px;
`;
