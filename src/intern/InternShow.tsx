import {
  BooleanField,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  FunctionField,
} from "react-admin";
import { ManagerCard } from "../components/ManegerCard";

export const InternShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="firstName" label="Prénom" />
      <TextField source="lastName" label="Nom" />
      <BooleanField source="isRemunerate" label="Rémunéré" />
      <NumberField source="remuneration" label="Rémunération" />

      <ReferenceField
        source="managerId"
        reference="employees"
        link="show"
        label="Lien Manager"
      >
        <FunctionField
          render={(record?: any) => record ? `${record.firstName} ${record.lastName}` : ''}
        />
      </ReferenceField>

      <ManagerCard />
    </SimpleShowLayout>
  </Show>
);
