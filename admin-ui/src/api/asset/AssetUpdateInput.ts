import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AssetUpdateInput = {
  address?: string | null;
  assetType?: "Villa" | "Tant" | "Car" | null;
  customer?: CustomerWhereUniqueInput | null;
  name?: string | null;
};
