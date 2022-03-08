import { AssetCreateNestedManyWithoutCustomersInput } from "./AssetCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  assets?: AssetCreateNestedManyWithoutCustomersInput;
  comments?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
