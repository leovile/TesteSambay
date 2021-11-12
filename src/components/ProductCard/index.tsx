import { Fragment, useContext } from 'react';

import Link from 'next/link';

import * as S from './styles';

import { ProductContext } from '../../context';

interface ProductData {
  id: number;
  image: StaticImageData;
  description: string;
  price: string;
  payment: string;
  tag: string;
}

interface ProductCardComponentProps {
  product: ProductData;
}

const ProductCard: React.FC<ProductCardComponentProps> = ({ product }) => {
  const { setProductId } = useContext(ProductContext);

  return (
    <Fragment>
      <Link href="/DetailedProduct" passHref>
        <S.Container onClick={() => setProductId(product.id)}>
          <S.ImageWrapper>
            <S.ProductImage src={product.image} layout="fill" />
          </S.ImageWrapper>
          <S.DetailsWrapper>
            <S.Description>{product.description}</S.Description>
            <S.Price>{product.price}</S.Price>
            <S.Payment>{product.payment}</S.Payment>
            <S.Tag>{product.tag}</S.Tag>
          </S.DetailsWrapper>
        </S.Container>
      </Link>
    </Fragment>
  );
};

export default ProductCard;
