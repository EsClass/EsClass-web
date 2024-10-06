export interface FilePickerOptions {
  fileType: "image" | "video" | "pdf" | "all";
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
