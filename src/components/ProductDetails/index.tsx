import { Fragment, useContext } from 'react';

import { MdKeyboardArrowLeft } from 'react-icons/md';

import * as S from './styles';

import { productList } from 'data';

import { ProductContext } from '../../context';

import Image from 'next/image';

import * as T from './types';

import Link from 'next/link';

const ProductDetails: React.FC<T.ProductCardComponentProps> = () => {
  const { productId } = useContext(ProductContext);

  const productMatchesContext = productList[productId].id === productId;
  const productName = productList[productId].name;
  const productImage = productList[productId].image;
  const productPrice = productList[productId].price;
  const productState = productList[productId].state;
  const productDescription = productList[productId].description;

  return (
    <Fragment>
      <S.Container>
        <Link href="/" passHref>
          <S.Wrapper>
            <MdKeyboardArrowLeft />
            <S.Name>{productMatchesContext && productName}</S.Name>
          </S.Wrapper>
        </Link>

        <S.DetailsWrapper>
          <S.ImageWrapper>
            <Image src={productMatchesContext && productImage} />
          </S.ImageWrapper>

          <S.Details>
            <S.State>{productMatchesContext && productState}</S.State>
            <S.Price>{productMatchesContext && productPrice}</S.Price>
            <S.Title>Descrição</S.Title>
            <S.Description>
              {productMatchesContext && productDescription}
            </S.Description>
            <S.Title>Detalhes do Produto</S.Title>
          </S.Details>
        </S.DetailsWrapper>
      </S.Container>
    </Fragment>
  );
};

export default ProductDetails;
