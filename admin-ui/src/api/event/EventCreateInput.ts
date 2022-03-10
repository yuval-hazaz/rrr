import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type EventCreateInput = {
  address?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
