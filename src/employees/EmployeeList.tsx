import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
  EditButton,
  DeleteButton,
  ShowButton,
  SearchInput,
  SelectInput,
  ListProps,
} from "react-admin";
import { FC } from "react";
const employeeFilters = [
  <SearchInput source="q" alwaysOn />,
  <SelectInput
    source="department"
    choices={[
      { id: "Informatique", name: "Informatique" },
      { id: "Marketing", name: "Marketing" },
      { id: "RH", name: "RH" },
      { id: "Finance", name: "Finance" },
    ]}
  />,
];

const EmployeeList: FC<ListProps> = () => (
  <List filters={employeeFilters} perPage={5}>
    <Datagrid rowClick="show">
      <TextField source="id" label="ID" />
      <TextField source="firstname" label="Firstname" />
      <TextField source="lastname" label="Lastname" />
      <TextField source="email" label="Email" />
      <TextField source="department" label="Department" />
      <NumberField
        source="salary"
        label="Salary"
        options={{ style: 'currency', currency: 'EUR' }}
      />
      <BooleanField source="active" label="Active" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default EmployeeList;
