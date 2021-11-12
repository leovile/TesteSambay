import * as S from './styles';

import LogoSambay from '../../../public/img/logo.svg';

import Link from 'next/link';

import { BiSearch } from 'react-icons/bi';
import { FaRegBell } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
  return (
    <S.Container>
      <Link href="/" passHref>
        <S.LogoWrapper>
          <S.Logo src={LogoSambay}></S.Logo>
        </S.LogoWrapper>
      </Link>

      <S.SearchBarWrapper>
        <BiSearch />
        <S.SearchBar placeholder="Busque aqui seu produto" />
      </S.SearchBarWrapper>
      <S.RightWrapper>
        <FaRegBell />
        <MdOutlineShoppingCart />
        <CgProfile />
      </S.RightWrapper>
    </S.Container>
  );
};

export default Header;
