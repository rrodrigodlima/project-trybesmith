export type Product = {
  id: number;
  name: string;
  price: string;
  orderId: number;
};
export type ProductTypeData = Omit<Product, 'id'>;

export type ProductTypeResponse = {
  id: number,
  name: string,
  price: string,
};