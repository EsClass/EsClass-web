import { Difficulty, QuestionType } from ".";

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
  courseCount: number;
  expertise: string[];
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  category: string[];
  tutor: string;
  createdAt: string;
  status: "Draft" | "Published";
  updatedAt: string;
}

export interface Resource {
  course: string;
  title: string;
  description: "This is the description";
  type: "File" | "Video";
  url: string;
  tutor: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Question {
  _id: string;
  questionNumber: number;
  question: string;
  solution: string;
  questionType: QuestionType;
  difficultyLevel: Difficulty;
  isMonetized: boolean;
  course: string;
  tutor: string;
  createdAt: string;
}
