import { Fragment, useContext, useEffect } from 'react';

import * as S from './styles';

import { productList } from 'data';

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

const ProductDetails: React.FC<ProductCardComponentProps> = () => {
  const { productId } = useContext(ProductContext);

  const productMatchesContext = productList[productId].id === productId;
  const productDescription = productList[productId].description;

  return (
    <Fragment>
      <S.Container>
        <S.Description>
          {productMatchesContext && productDescription}
        </S.Description>
      </S.Container>
    </Fragment>
  );
};

export default ProductDetails;
