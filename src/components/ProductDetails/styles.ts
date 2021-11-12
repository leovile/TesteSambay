import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  width: 100%;
  height: calc(100vh - 10rem);

  padding: 2% 10%;

  @media screen and (max-width: 1366px) {
    gap: 0rem;
  }
`;

export const Description = styled.p`
  color: var(--gray);

  font-size: 1.5rem;
  font-weight: 700;
`;
