import styled from 'styled-components/macro';

export const Container = styled.div`
display: flex;
    width: 100%;
    height: 180px;
    background-color: #8ed2d1;
    justify-content: space-around;
    align-items: center;
`;

export const Content = styled.div`
  display: flex;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 2;
  text-align: left;
  color: #ffffff;
`;

export const Social = styled.div`

a{
  margin-right: 47px;
}
`;


export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;

  a{
    font-size: 18px;
  line-height: 2;
  text-align: left;
  color: #ffffff;
  }
`;

export const Socialtitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 2;
  text-align: left;
  color: #ffffff;
  margin-bottom: 15px;
`;
