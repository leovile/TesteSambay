import styled from 'styled-components';

import Image from 'next/image';

export const Container = styled.div`
  position: relative;
  width: 18rem;
  max-width: 18rem;
  height: 100%;

  border-radius: 1.5rem;

  transform: scale(1);
  transition-duration: 0.2s;

  :hover {
    transform: scale(1.05);

    transition-duration: 0.1s;
    box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.2);
  }

  cursor: pointer;

  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1366px) {
    width: 13rem;
    max-width: 13rem;

    height: 90%;
  }
`;

export const Description = styled.p`
  color: var(--gray);

  font-size: 1.5rem;
  font-weight: 700;
`;

export const Price = styled.p`
  color: var(--blue);

  font-size: 1.5rem;
  font-weight: 700;
`;

export const Payment = styled.p`
  font-size: 1.2rem;
`;

export const Tag = styled.p`
  position: absolute;
  bottom: 0;

  font-size: 1.5rem;

  color: white;

  padding-left: 1rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;

  width: 100%;
  background-color: var(--purple);

  border-radius: 0 0 1.5rem 1.5rem;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 18rem;
  > div {
    position: unset !important;
    height: 100%;
    border-radius: 1rem 1rem 0 0;
  }

  @media screen and (max-width: 1366px) {
    height: 13rem;
  }
`;

export const ProductImage = styled(Image)`
  object-fit: contain;
  width: auto !important;
  position: relative !important;
  height: 100% !important;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: 1rem;
`;
