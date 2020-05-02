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
  width: 40%;
  height: 100vh;
`;

export const RoomList = styled.div``;

export const Hello = styled.h3`
  font-size: 2em;
  color: #0aa1a7;
  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  font-size: 1.5em;
  color: #5a5a5a;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font-size: 1.125em;
  color: #5a5a5a;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 25px 0;
  width: 60%;
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
`;

export const MapEvent = styled.div`
  &.imageMap {
    width: 668px;
    height: 100%;
    position: fixed;
  }
`;

export const CardMap = styled.div`
  display: flex;
  flex-flow: row;
`;

export const CardText = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Title = styled.p`
  font-size: 2em;
  color: #0aa1a7;
`;
