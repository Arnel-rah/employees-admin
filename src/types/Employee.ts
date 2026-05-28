export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  department: "Informatique" | "Marketing" | "RH" | "Finance";
  salary: number;
  active: boolean;
}
