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
  description: string;
  type: "File" | "Video";
  url: string;
  tutor: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Question {
  _id: string;
  questionNumber: string;
  question: string;
  solution: string;
  questionType: QuestionType;
  difficultyLevel: Difficulty;
  isMonetized: boolean;
  course: string | Course;
  tutor: string;
  createdAt: string;
}
export interface QuestionFull {
  _id: string;
  questionNumber: number;
  question: string;
  solution: string;
  questionType: QuestionType;
  difficultyLevel: Difficulty;
  isMonetized: boolean;
  course: Course;
  tutor: Tutor;
  createdAt: string;
}
export interface ResourceFull {
  course: Course;
  title: string;
  description: string;
  type: "File" | "Video";
  url: string;
  tutor: Tutor;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
