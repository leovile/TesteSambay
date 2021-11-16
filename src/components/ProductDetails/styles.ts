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

  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  padding-bottom: 10rem;

  svg {
    font-size: 5rem;
    color: var(--gray);
    cursor: pointer;
  }

  @media screen and (max-width: 1440px) {
    padding-bottom: 5rem;
  }

  @media screen and (max-width: 1366px) {
    padding-bottom: 4rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 30%;

  margin-left: auto;
  margin-right: auto;

  > div {
    border-radius: 1.5rem;
  }

  @media screen and (max-width: 1440px) {
    width: 35%;
  }

  @media screen and (max-width: 1366px) {
    width: 30%;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  width: 40%;
`;

export const State = styled.p`
  color: var(--blue);
  font-size: 1.5rem;
  font-weight: 700;
`;
export const Payment = styled.p`
  color: var(--light-gray);

  font-size: 1.25rem;
  font-weight: 700;

  margin-left: 2rem;
`;

export const Price = styled.p`
  color: var(--blue);
  font-size: 3rem;
  font-weight: 700;

  margin-left: 4rem;
`;

export const Title = styled.p`
  color: var(--blue);

  font-size: 3rem;

  @media screen and (max-width: 1366px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  color: var(--gray);
  font-size: 2rem;
  font-weight: 400;

  text-align: justify;

  margin-left: 4rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1366px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const PaymentDetails = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 1rem;

  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.2);

  margin-bottom: 2rem;
`;

export const GreenDiv = styled.div`
  background-color: var(--green);

  width: 100%;
  height: 2rem;

  border-radius: 0.5rem;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftColumn = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  width: 25%;

  @media screen and (max-width: 1440px) {
    width: 40%;
  }
`;

export const RightColumn = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  width: 25%;

  @media screen and (max-width: 1440px) {
    width: 40%;
  }
`;

export const Category = styled.li`
  font-size: 1.25rem;
  color: var(--light-gray);

  ::marker {
    font-size: 2rem;
    color: var(--light-gray);
  }
`;
export const Size = styled(Category)``;
export const Weight = styled(Category)``;
export const Brand = styled(Category)``;
export const Material = styled(Category)``;

export const Subtags = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;

  margin-left: 6rem;

  @media screen and (max-width: 1024px) {
    margin-left: 5rem;
  }
`;
