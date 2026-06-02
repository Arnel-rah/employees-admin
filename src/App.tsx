import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import EmployeeCreate from "./employees/EmployeeCreate";
import EmployeeEdit from "./employees/EmployeeEdit";
import EmployeeList from "./employees/EmployeeList";
import EmployeeShow from "./employees/EmployeeShow";
import { InternCreate } from "./intern/InternCreate";
import { InternEdit} from "./intern/InternEdit";
import { InternList } from "./intern/InternList";
import {InternShow} from "./intern/InternShow";
import { Layout } from "./Layout";

export const dataProvider = jsonServerProvider("http://localhost:3002");

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource
      name="employees"
      list={EmployeeList}
      create={EmployeeCreate}
      edit={EmployeeEdit}
      show={EmployeeShow}
    />
    <Resource
      name="interns"
      list={InternList}
      create={InternCreate}
      edit={InternEdit}
      show={InternShow}
    />
  </Admin>
);
