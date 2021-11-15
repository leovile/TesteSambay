import { Fragment, useContext } from 'react';

import Link from 'next/link';

import * as S from './styles';

import { ProductContext } from '../../context';

import * as T from './types';

const PromotionProductCard: React.FC<T.ProductCardComponentProps> = ({
  product
}) => {
  const { setProductId } = useContext(ProductContext);

  return (
    <Fragment>
      <Link href="/DetailedProduct" passHref>
        <S.Container onClick={() => setProductId(product.id)}>
          <S.ImageWrapper>
            <S.ProductImage src={product.image} layout="fill" />
          </S.ImageWrapper>
          <S.DetailsWrapper>
            <S.Name>{product.name}</S.Name>
            <S.Price>{product.price}</S.Price>
            <S.Payment>{product.payment}</S.Payment>
            <S.Tag>Promoção</S.Tag>
          </S.DetailsWrapper>
        </S.Container>
      </Link>
    </Fragment>
  );
};

export default PromotionProductCard;
