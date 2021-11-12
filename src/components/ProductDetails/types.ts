export interface ProductData {
  id: number;
  image: StaticImageData;
  state: string;
  name: string;
  description: string;
  price: string;
  payment: string;
  tag: string;
}

export interface ProductCardComponentProps {
  product: ProductData;
}
