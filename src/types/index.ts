export interface FilePickerOptions {
  fileType: "image" | "video" | "pdf" | "all";
}

export interface FilePickerResult {
  uri: string;
  file: File;
}
