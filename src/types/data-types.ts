export type Role = "Student" | "Supervisor" | "Admin";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  created_At: Date;
  picture: string;
  password?: string;
  role: Role;
}

export interface Student extends User {
  matric_number: string;
  role: "Student";
}

export interface Supervisor extends User {
  department: string;
  role: "Supervisor";
}
