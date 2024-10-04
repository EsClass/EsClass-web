export type Role = "Student" | "Tutor";

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
