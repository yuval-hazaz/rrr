import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  address?: SortOrder;
  assetType?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
