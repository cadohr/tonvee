import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1366px;
  margin: auto;
  margin-top: 100px;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 140px;
`;
export const Acknowledgment = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 570px;
`;
export const Title = styled.h1`
  font-size: 81px;
  font-weight: 900;
  line-height: 1.25;
  text-align: left;
  color: #0aa1a7;
`;
export const Text = styled.p`
  font-size: 18px;
  line-height: 1.78;
  text-align: left;
  color: #5a5a5a;
`;

export const SubTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  line-height: 1.25;
  text-align: left;
  color: #0aa1a7;
`;

export const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
`;
export const BottomRigth = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      border-radius: 4px;
      border: solid 1px #0aa1a7;
      background-color: #ffffff;
    }
    textarea {
      border: solid 1px #0aa1a7;
      width: 100%;
      padding: 20px;
      color: black;
      border-radius: 2px;
      background-color: #ffffff;
      margin-bottom: 20px;
      font-size: 15px;

      &::placeholder {
        color: #77a8c9;
      }
    }
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  margin-top: 20px;
  border-radius: 2px;
  background-color: #fd7e40;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
`;
