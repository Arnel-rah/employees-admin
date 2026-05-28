import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from './dataProvider';
import EmployeeList from "./employees/EmployeeList";



export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="employees" list={ListGuesser}/>
    <Resource name="employeesList" list={EmployeeList}/>
  </Admin>
);


