import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LefContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 45px 0;
  width: 30%;
  height: 100vh;
`;

export const RoomList = styled.div``;

export const Hello = styled.h3`
  font-size: 2em;
  color: #0aa1a7;
  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  font-size: 1.125;
  color: #5a5a5a;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font-size: 1vw;
  color: #5a5a5a;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 25px 0;
  width: 70%;
  height: 100vh;
`;

export const LiveRooms = styled.div`
  display: flex;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Live = styled.div`
  text-align: right;
`;

export const EventContent = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  display: inline;
`;

export const MapEvent = styled.div`
  display: flex;
  justify-content: center;

  .imageMap {
    width: 50%;
  }
`;

export const CardMap = styled.div`
  display: flex;
  flex-flow: row;
  position: absolute;

  &.tech{
    left: 63%;
    top: 50%;
    display: flex;
    flex-direction: row-reverse;

    img{
      width: 8vw;
      margin-right: 20px;
    }
  }

  &.varejo{
    top: 60%;
    left: 54%;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;

    img{
      width: 7vw;
      margin-right: 20px
    }
  }

  &.inovacao{
    right: 56%;
    top: 10%;

    img{
      margin-left: 20px;
    }
  }

  &.financas{
    left: 52%;
    top: 0%;
    display: flex;
    flex-direction: row-reverse;

    img{
      width: 11vw;
      margin-right: 20px;
    }
  }

  img{
    width: 10vw;
  }


`;

export const CardText = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Title = styled.p`
  font-size: 1.7vw;
  color: #0aa1a7;
`;
