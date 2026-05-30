import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  BooleanInput,
  required,
  minValue,
  CreateProps,
} from "react-admin";
import { FC } from "react";

const EmployeeCreate: FC<CreateProps> = () => (
  <Create>
    <SimpleForm>
      <TextInput
        source="firstname"
        label="Firstname"
        validate={required("Le prénom est obligatoire")}
      />
      <TextInput
        source="lastname"
        label="Lastname"
        validate={required("Le nom est obligatoire")}
      />
      <TextInput
        source="email"
        label="Email"
        validate={required("L'email est obligatoire")}
      />
      <SelectInput
        source="department"
        label="Department"
        validate={required("Le département est obligatoire")}
        choices={[
          { id: "Informatique", name: "Informatique" },
          { id: "Marketing", name: "Marketing" },
          { id: "RH", name: "RH" },
          { id: "Finance", name: "Finance" },
        ]}
      />
      <NumberInput
        source="salary"
        label="Salary"
        validate={[
          required("The salary is required"),
          minValue(1500, "The minimum salary is 1500€")
        ]}
      />
      <BooleanInput source="active" label="Active" defaultValue={true} />
    </SimpleForm>
  </Create>
);

export default EmployeeCreate;
