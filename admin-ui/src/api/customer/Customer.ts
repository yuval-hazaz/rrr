import { Asset } from "../asset/Asset";

export type Customer = {
  assets?: Array<Asset>;
  comments: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};
