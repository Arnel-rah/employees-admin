import {
  BooleanInput,
  Create,
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  useRecordContext,
} from "react-admin";
import { useFormContext, useWatch } from "react-hook-form";

const validateIntern = (values: any) => {
  const errors: any = {};
  if (!values.firstname) errors.firstname = "Le prénom est obligatoire";
  if (!values.lastname) errors.lastname = "Le nom est obligatoire";
  if (!values.department) errors.department = "Le domaine est obligatoire";

  if (!values.email) {
    errors.email = "L'email est obligatoire";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Format d'email invalide";
  }

  if (
    values.isRemunerate &&
    (values.remuneration === undefined || values.remuneration <= 0)
  ) {
    errors.remuneration =
      "La rémunération est obligatoire si le stagiaire est rémunéré";
  }
  return errors;
};

const InternTitle = () => {
  const record = useRecordContext();
  return (
    <span>
      Modifier : {record ? `${record.firstname} ${record.lastname}` : ""}
    </span>
  );
};

const FormFields = () => {
  const { control } = useFormContext();

  const department = useWatch({ control, name: "department" });
  const isRemunerate = useWatch({ control, name: "isRemunerate" });

  return (
    <>
      <TextInput source="firstname" label="Prénom" fullWidth />
      <TextInput source="lastname" label="Nom" fullWidth />
      <TextInput source="email" label="Email" fullWidth />

      <SelectInput
        source="department"
        label="Domaine"
        choices={[
          { id: "Informatique", name: "Informatique" },
          { id: "RH", name: "RH" },
          { id: "Marketing", name: "Marketing" },
          { id: "Finance", name: "Finance" },
        ]}
        fullWidth
      />

      <BooleanInput source="isRemunerate" label="Rémunéré ?" defaultValue={false} />

      {isRemunerate === true && (
        <NumberInput source="remuneration" label="Rémunération (€)" fullWidth />
      )}

      <ReferenceInput
        source="managerId"
        reference="employees"
        filter={{ department: department, active: true }}
      >
        <SelectInput
          optionText={(choice) => `${choice.firstname} ${choice.lastname}`}
          label="Manager"
          fullWidth
        />
      </ReferenceInput>
    </>
  );
};

export const InternCreate = () => (
  <Create>
    <SimpleForm validate={validateIntern}>
      <FormFields />
    </SimpleForm>
  </Create>
);

export const InternEdit = () => (
  <Edit title={<InternTitle />}>
    <SimpleForm validate={validateIntern}>
      <FormFields />
    </SimpleForm>
  </Edit>
);
