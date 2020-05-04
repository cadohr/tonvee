import styled from 'styled-components/macro';

export const Container = styled.div``;
export const Header = styled.div`
  height: 162px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
`;


export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  line-height: 1.25;
  text-align: left;
  color: #0aa1a7;
`;
export const Stands = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
export const InnerTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  text-align: right;
  color: #f28719;
`;
export const Button = styled.button`
  border-radius: 5px;
  border: solid 1px #f28719;
  background: transparent;
  padding: 6px 22px;
`;
export const RommContent = styled.div`
  padding: 0 60px;
  margin: -20px 0 50px 0;
  display: flex;
  align-items: flex-end
`;
export const Video = styled.div`
  max-width: 65%;

  img{
    width: 100%;
  }
`;
export const Chat = styled.div`
  width: 40%;
  margin-left: -15px;

  img{
    width: 100%;
  }
`;

