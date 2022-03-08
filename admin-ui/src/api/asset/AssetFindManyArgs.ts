import { AssetWhereInput } from "./AssetWhereInput";
import { AssetOrderByInput } from "./AssetOrderByInput";

export type AssetFindManyArgs = {
  where?: AssetWhereInput;
  orderBy?: AssetOrderByInput;
  skip?: number;
  take?: number;
};
