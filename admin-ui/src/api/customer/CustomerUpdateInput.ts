import { AssetUpdateManyWithoutCustomersInput } from "./AssetUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  assets?: AssetUpdateManyWithoutCustomersInput;
  comments?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
