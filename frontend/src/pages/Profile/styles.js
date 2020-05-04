import styled from 'styled-components/macro';

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

export const Imagewrapper = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;

  div {
    position: absolute;
    height: 100%;
    width: 40%;

    a {
      position: absolute;
      right: 10px;
      bottom: 10px;
      padding: 5px;
      background: #fff;
      border-radius: 50%;
    }
  }

  .profile-picture {
    max-width: 250px;
  }
`;

export const Formwrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 900px;
  margin-bottom: 100px;

  form {
    width: 50%;
  }

  input {
    border-radius: 4px;
    border: solid 1px #0aa1a7;
    background-color: #ffffff;
    height: 50px;
  }

  hr {
    margin-bottom: 20px;
    border: 1px solid #0aa1a7;
  }
`;
