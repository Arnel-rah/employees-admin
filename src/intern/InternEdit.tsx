import {
  BooleanInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  useRecordContext,
} from "react-admin";
import { useWatch } from "react-hook-form";

const validateIntern = (values: any) => {
  const errors: any = {};
  if (!values.firstName) errors.firstName = "Le prénom est obligatoire";
  if (!values.lastName) errors.lastName = "Le nom est obligatoire";
  if (!values.domain) errors.domain = "Le domaine est obligatoire";

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
      Modifier : {record ? `${record.firstName} ${record.lastName}` : ""}
    </span>
  );
};

const InternForm = () => {
  const domain = useWatch({ name: "domain" });
  const isRemunerate = useWatch({ name: "isRemunerate" });

  return (
    <SimpleForm validate={validateIntern}>
      <TextInput source="firstName" label="Prénom" />
      <TextInput source="lastName" label="Nom" />
      <TextInput source="email" label="Email" />
      <SelectInput
        source="domain"
        label="Domaine"
        choices={[
          { id: "IT", name: "IT" },
          { id: "RH", name: "RH" },
          { id: "Marketing", name: "Marketing" },
        ]}
      />
      <BooleanInput source="isRemunerate" label="Rémunéré ?" />
      {isRemunerate && (
        <NumberInput source="remuneration" label="Rémunération (€)" />
      )}

      <ReferenceInput
        source="managerId"
        reference="employees"
        filter={{ department: domain, active: true }}
      >
        <SelectInput
          optionText={(choice) => `${choice.firstName} ${choice.lastName}`}
          label="Manager"
        />
      </ReferenceInput>
    </SimpleForm>
  );
};

export const InternEdit = () => (
  <Edit title={<InternTitle />}>
    <InternForm />
  </Edit>
);
