export type Order = {
  id: number;
  userId: number;
  productIds?: { id: number }[];
};

export type OrderDataType = Omit<Order, 'id'>;

export type OrderResponseType = Omit<Order, 'id'>;