import React, { createContext, useState } from 'react';

interface ProductContextProps {
  productId: number;
  setProductId: React.Dispatch<React.SetStateAction<number>>;
}

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);

const { Provider } = ProductContext;

export const ProductProvider: React.FC = ({ children }) => {
  const [productId, setProductId] = useState<number>(0);

  const productIds: ProductContextProps = {
    productId,
    setProductId
  };

  return <Provider value={productIds}>{children}</Provider>;
};
