import ProductDetails from 'components/ProductDetails';
import { NextPage } from 'next';

import * as T from './types';

const DetailedProduct: NextPage<T.ProductCardComponentProps> = ({
  product
}) => {
  return <ProductDetails product={product} />;
};

export default DetailedProduct;
