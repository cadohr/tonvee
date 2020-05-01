import styled from 'styled-components';

import colors from '~/styles/colors';

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: black;

  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 4px;
  width: 95%;
  height: 45px;
  padding: 0 15px;
  background-color: transparent;
  color: black;

  &::placeholder {
    color: black;
  }
  /* margin-bottom: 10px; */
`;

export const Error = styled.span`
  font-size: 11px;
  font-weight: bold;
  color: black;

  margin-top: 4px;
`;
