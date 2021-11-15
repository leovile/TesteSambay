import { Fragment, useContext } from 'react';

import { MdKeyboardArrowLeft } from 'react-icons/md';

import { productList } from 'data';

import { ProductContext } from '../../context';

import Image from 'next/image';

import Link from 'next/link';

import * as S from './styles';

import * as T from './types';

const ProductDetails: React.FC<T.ProductCardComponentProps> = () => {
  const { productId } = useContext(ProductContext);

  const productMatchesContext = productList[productId].id === productId;
  const productName = productList[productId].name;
  const productImage = productList[productId].image;
  const productPrice = productList[productId].price;
  const productState = productList[productId].state;
  const productDescription = productList[productId].description;
  const productPayment = productList[productId].payment;
  const productCategory = productList[productId].category;
  const productSize = productList[productId].size;
  const productBrand = productList[productId].brand;
  const productWeight = productList[productId].weight;
  const productMaterial = productList[productId].material;

  return (
    <Fragment>
      <S.Container>
        <S.Wrapper>
          <Link href="/" passHref>
            <MdKeyboardArrowLeft />
          </Link>
          <Link href="/" passHref>
            <S.Name>{productMatchesContext && productName}</S.Name>
          </Link>
        </S.Wrapper>

        <S.DetailsWrapper>
          <S.ImageWrapper>
            <Image src={productMatchesContext ? productImage : ''} />
          </S.ImageWrapper>

          <S.Details>
            <S.PaymentDetails>
              <S.State>{productMatchesContext && productState}</S.State>
              <S.PriceWrapper>
                <S.Price>{productMatchesContext && productPrice}</S.Price>
                <S.Payment>{productMatchesContext && productPayment}</S.Payment>
              </S.PriceWrapper>
              <S.GreenDiv></S.GreenDiv>
            </S.PaymentDetails>
            <S.Title>Descrição</S.Title>
            <S.Description>
              {productMatchesContext && productDescription}
            </S.Description>
            <S.Title>Detalhes do Produto</S.Title>
            <S.Subtags>
              <S.LeftColumn>
                <S.Category>
                  Categoria: {productMatchesContext && productCategory}
                </S.Category>
                <S.Size>Tamanho: {productMatchesContext && productSize}</S.Size>
                <S.Brand>
                  Marca: {productMatchesContext && productBrand}
                </S.Brand>
              </S.LeftColumn>
              <S.RightColumn>
                <S.Weight>
                  Peso: {productMatchesContext && productWeight}
                </S.Weight>
                <S.Material>
                  Material: {productMatchesContext && productMaterial}
                </S.Material>
              </S.RightColumn>
            </S.Subtags>
          </S.Details>
        </S.DetailsWrapper>
      </S.Container>
    </Fragment>
  );
};

export default ProductDetails;
