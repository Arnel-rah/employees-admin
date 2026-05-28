import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  BooleanInput,
  required,
  minValue,
  useRecordContext,
  EditProps,
} from "react-admin";
import { FC } from "react";
import { Employee } from "../types/Employee";

const EmployeeTitle: FC = () => {
  const record = useRecordContext<Employee>();
  return record ? `Modifier : ${record.firstname} ${record.lastname}` : "Modifier employé";
};

const EmployeeEdit: FC<EditProps> = () => (
  <Edit title={<EmployeeTitle />}>
    <SimpleForm>
      <TextInput
        source="firstname"
        label="Prénom"
        validate={required("Le prénom est obligatoire")}
      />
      <TextInput
        source="lastname"
        label="Nom"
        validate={required("Le nom est obligatoire")}
      />
      <TextInput
        source="email"
        label="Email"
        validate={required("L'email est obligatoire")}
      />
      <SelectInput
        source="department"
        label="Département"
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
        label="Salaire"
        validate={[
          required("Le salaire est obligatoire"),
          minValue(1500, "Le salaire minimum est 1500€")
        ]}
      />
      <BooleanInput source="active" label="Actif" />
    </SimpleForm>
  </Edit>
);

export default EmployeeEdit;
