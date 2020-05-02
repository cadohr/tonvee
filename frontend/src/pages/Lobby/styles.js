import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${colors.primary};

  h1 {
    color: white;
  }
`;

export const RoomList = styled.div``;
