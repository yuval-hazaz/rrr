import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AssetWhereInput = {
  address?: StringNullableFilter;
  assetType?: "Villa" | "Tant" | "Car";
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
