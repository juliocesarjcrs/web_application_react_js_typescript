export interface Sale {
  id: string;
  products_id: string;
  qty: number;
  sale_at: Date;
  users_id: string;
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
  };
  user: {
    id: string;
    document: string;
    name: string;
    last_name: string;
  };
}

export interface CreateSalePayload {
  products_id: string;
  qty: number;
  users_id: string;
}
