import { Fragment } from 'react';

import * as S from './styles';

interface ProductData {
  image: StaticImageData;
  description: string;
  price: string;
  payment: string;
  tag: string;
}

interface ProductCardComponentProps {
  product: ProductData;
}

const ProductDetails: React.FC<ProductCardComponentProps> = ({ product }) => {
  return (
    <Fragment>
      <S.Container>
        <S.Description>{product.description}</S.Description>
      </S.Container>
    </Fragment>
  );
};

export default ProductDetails;
