import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  width: 100%;
  height: calc(100% - 10rem);

  padding: 5% 5%;
`;

export const SalesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 100%;
`;

export const LastProductsWrapper = styled(SalesWrapper)``;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const SalesTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;

  color: var(--gray);
`;

export const LastProductsTitle = styled(SalesTitle)``;
