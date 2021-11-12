export interface ProductData {
  id: number;
  image: StaticImageData;
  name: string;
  price: string;
  payment: string;
  tag: string;
}

export interface ProductCardComponentProps {
  product: ProductData;
}
