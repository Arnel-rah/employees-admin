import {
  BooleanField,
  Datagrid,
  DeleteButton,
  EditButton,
  FunctionField,
  List,
  NumberField,
  ReferenceField,
  SelectInput,
  TextField,
  TextInput,
} from "react-admin";
import { QuickCreateInternButton } from "./QuickCreateIntern";

const internFilters = [
  <TextInput label="Recherche" source="q" alwaysOn />,
  <SelectInput
    source="department"
    label="Domaine"
    choices={[
      { id: "Informatique", name: "Informatique" },
      { id: "RH", name: "RH" },
      { id: "Marketing", name: "Marketing" },
      { id: "Finance", name: "Finance" },
    ]}
  />,
  <SelectInput
    source="isRemunerate"
    label="Statut Rémunération"
    choices={[
      { id: true, name: "Rémunéré" },
      { id: false, name: "Non Rémunéré" },
    ]}
  />,
];

export const InternList = () => (
  <List filters={internFilters} actions={<QuickCreateInternButton />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="firstname" label="Firstname" />
      <TextField source="lastname" label="Lastname" />
      <TextField source="department" label="Department" />
      <BooleanField source="isRemunerate" label="Remunerated" />
      <NumberField
        source="remuneration"
        label="Remuneration"
        options={{ style: "currency", currency: "EUR" }}
      />
      <ReferenceField source="managerId" reference="employees" label="Manager">
        <FunctionField
          render={(record?: any) =>
            record ? `${record.firstname} ${record.lastname}` : ""
          }
        />
      </ReferenceField>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
