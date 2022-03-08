import { Customer } from "../customer/Customer";

export type Asset = {
  address: string | null;
  assetType?: "Villa" | "Tant" | "Car" | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
