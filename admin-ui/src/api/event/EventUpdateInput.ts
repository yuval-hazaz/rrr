import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type EventUpdateInput = {
  address?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
