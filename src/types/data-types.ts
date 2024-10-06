export type Role = "Student" | "Tutor";

export interface User {
  name: string;
  role: Role;
  email: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Tutor extends User {
  institution: string;
  earnings: number;
  expertise: string[];
}
