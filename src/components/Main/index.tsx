import { Fragment } from 'react';

import * as S from './styles';

import ProductCard from 'components/ProductCard';

import uniqid from 'uniqid';

import { productList } from 'data';

const Main: React.FC = () => {
  return (
    <Fragment>
      <S.Container>
        <S.SalesWrapper>
          <S.SalesTitle>Produtos em Promoção</S.SalesTitle>
          <S.CardsWrapper>
            {productList.map((item) => (
              <ProductCard key={uniqid()} product={item}></ProductCard>
            ))}
          </S.CardsWrapper>
        </S.SalesWrapper>

        <S.LastProductsWrapper>
          <S.LastProductsTitle>Últimas novidades</S.LastProductsTitle>
          <S.CardsWrapper>
            {productList.map((item) => (
              <ProductCard key={uniqid()} product={item}></ProductCard>
            ))}
          </S.CardsWrapper>
        </S.LastProductsWrapper>
      </S.Container>
    </Fragment>
  );
};

export default Main;
