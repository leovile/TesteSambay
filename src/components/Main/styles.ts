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

  @media screen and (max-width: 1440px) {
    gap: 0.5rem;
  }
`;

export const SalesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 100%;
  height: 100%;

  @media screen and (max-width: 1440px) {
    gap: 0.5rem;
  }

  @media screen and (max-width: 1366px) {
    gap: 1rem;
  }
`;

export const LastProductsWrapper = styled(SalesWrapper)``;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
`;

export const SalesTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;

  color: var(--gray);

  @media screen and (max-width: 1440px) {
    font-size: 3rem;
  }
`;

export const LastProductsTitle = styled(SalesTitle)``;
