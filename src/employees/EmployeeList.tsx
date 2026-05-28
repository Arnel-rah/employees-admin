import { BooleanField, DataTable, List,NumberField, TextField } from "react-admin";

const EmployeeList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="firstname,lastname" field={TextField}/>
      <DataTable.Col source="email" field={TextField}/>
      <DataTable.Col source="departement" field={TextField}/>
      <DataTable.Col source="256€" field={NumberField}/>
      <DataTable.Col source="active" field={BooleanField}/>
    </DataTable>
  </List>
);

export default EmployeeList;
