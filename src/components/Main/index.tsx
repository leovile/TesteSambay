import { Fragment } from 'react';

import * as S from './styles';

import PromotionProductCard from 'components/PromotionProductCard';
import NewProductCard from 'components/NewProductCard';

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
              <PromotionProductCard
                key={uniqid()}
                product={item}
              ></PromotionProductCard>
            ))}
          </S.CardsWrapper>
        </S.SalesWrapper>

        <S.LastProductsWrapper>
          <S.LastProductsTitle>Últimas novidades</S.LastProductsTitle>
          <S.CardsWrapper>
            {productList.map((item) => (
              <NewProductCard key={uniqid()} product={item}></NewProductCard>
            ))}
          </S.CardsWrapper>
        </S.LastProductsWrapper>
      </S.Container>
    </Fragment>
  );
};

export default Main;
