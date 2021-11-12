import styled from 'styled-components';

import Image from 'next/image';

export const Container = styled.div`
  height: 10rem;
  width: 100%;

  display: flex;
  align-items: center;

  background-color: var(--blue);

  padding: 0 5%;
`;

export const LogoWrapper = styled.div`
  min-width: 15rem;

  cursor: pointer;
`;

export const Logo = styled(Image)``;

export const SearchBarWrapper = styled.div`
  position: relative;

  margin-left: 10rem;

  svg {
    position: absolute;
    top: 1rem;
    left: 1rem;

    font-size: 2rem;

    color: gray;
  }
`;

export const SearchBar = styled.input`
  height: 4rem;
  width: 35rem;

  outline: none;
  border: none;
  border-radius: 1rem;

  padding-left: 4rem;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-left: auto;

  svg {
    color: white;
    font-size: 3rem;

    :nth-child(3) {
      font-size: 6rem;
    }
  }
`;
