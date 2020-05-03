/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.div`
  margin-top: 100px;

  h1 {
    font-size: 32px;
    font-weight: bold;
    line-height: 1.25;
    text-align: left;
    color: #0aa1a7;
    margin: 25px 0 100px 0;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 2px;
  background-color: #fd7e40;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
`;

export const Formwrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 900px;

  img {
    width: 50%;
    max-width: 250px;
  }

  form {
    width: 50%;
  }

  input {
    border-radius: 4px;
    border: solid 1px #0aa1a7;
    background-color: #ffffff;
  }
`;
