import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #0aa1a7;
`;

export const Logo = styled.div`
  display: flex;
  margin: 10px 45px;
`;

export const ShortCuts = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const UserProfiler = styled.div`
  margin: 0 15px;

  img {
    max-width: 45px;
    max-height: 45px;
    border-radius: 50%;
  }
`;

export const Logout = styled.div`
  margin: 0 15px;
  cursor: pointer;
  img {
    max-width: 39px;
    max-height: 39px;
  }
`;
