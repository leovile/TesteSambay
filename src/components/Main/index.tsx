import { Fragment } from 'react';

import * as S from './styles';

import GlobalStyles from 'styles/global';
import ProductCard from 'components/ProductCard';

const Main = () => {
  return (
    <Fragment>
      <S.Container>
        <S.SalesWrapper>
          <S.SalesTitle>Produtos em Promoção</S.SalesTitle>
          <S.CardsWrapper>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </S.CardsWrapper>
        </S.SalesWrapper>

        <S.LastProductsWrapper>
          <S.LastProductsTitle>Últimas novidades</S.LastProductsTitle>
          <S.CardsWrapper>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </S.CardsWrapper>
        </S.LastProductsWrapper>
      </S.Container>
      <GlobalStyles />
    </Fragment>
  );
};

export default Main;
