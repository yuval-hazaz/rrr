import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";

export const AssetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <SelectInput
          source="assetType"
          label="Asset Type"
          choices={[
            { label: "villa", value: "Villa" },
            { label: "tant", value: "Tant" },
            { label: "car", value: "Car" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
