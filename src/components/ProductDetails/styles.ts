import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);

  padding: 2% 5%;
`;

export const Name = styled.p`
  color: var(--gray);

  font-size: 3rem;
  font-weight: 700;

  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  svg {
    font-size: 5rem;
    color: var(--gray);
  }
`;

export const ImageWrapper = styled.div`
  height: 45rem;
  width: 45rem;

  margin-left: auto;
  margin-right: auto;

  > div {
    border-radius: 1.5rem;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const State = styled.p``;
export const Price = styled.p``;
export const Title = styled.p``;
export const Description = styled.p``;
