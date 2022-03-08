import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AssetCreateInput = {
  address?: string | null;
  assetType?: "Villa" | "Tant" | "Car" | null;
  customer?: CustomerWhereUniqueInput | null;
  name?: string | null;
};
