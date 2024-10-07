export interface FilePickerOptions {
  fileType?: "image" | "video" | "pdf" | "all";
  accept?: string;
}

export interface FilePickerResult {
  uri: string;
  file: File;
}

export interface SignupTutorForm {
  name: string;
  role: "Tutor";
  password: string;
  email: string;
  institution: string;
}

export interface AddCourseForm {
  title: string;
  description: string;
  category: string[];
}

export interface AddResourceForm {
  title: string;
  description: string;
  url: string;
  course: string;
  type: "File" | "Video" | string;
}

export type Difficulty = "Easy" | "Medium" | "Hard";
export type QuestionType = "Boolean" | "Descriptive";
export interface AddQuestionForm {
  question: string;
  solution: string;
  difficultyLevel: Difficulty;
  questionType: QuestionType;
  course: string;
  isMonetized: boolean;
}
