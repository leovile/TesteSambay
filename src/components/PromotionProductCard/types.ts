export interface ProductData {
  id: number;
  image: StaticImageData;
  state: string;
  name: string;
  description: string;
  price: string;
  payment: string;
  tag: string;
  category: string;
  size: string;
  weight: string;
  material: string;
  brand: string;
}

export interface ProductCardComponentProps {
  product: ProductData;
}
