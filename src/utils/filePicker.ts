import { FilePickerOptions, FilePickerResult } from "@/types";

export async function getMimeType(url: string) {
  try {
    const response = await fetch(url, { method: "HEAD" }); // Use HEAD request to get only headers
    const mimeType = response.headers.get("content-type"); // Get the Content-Type header
    console.log(`MIME type: ${mimeType}`);
  } catch (error: any) {
    console.error(`Error fetching MIME type: ${error.message}`);
  }
}

export const filePicker = ({
  fileType = "image",
  accept,
}: FilePickerOptions): Promise<FilePickerResult> => {
  const fileTypeMApper = {
    image: "image/*",
    video: "video/*",
    pdf: ".pdf",
    all: "*",
  };
  const input = document.createElement("input");
  input.type = "file";
  input.accept = accept || fileTypeMApper[fileType];
  // Trigger
  input.click();

  return new Promise((resolve, reject) => {
    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files ? target.files[0] : null;
      if (file) {
        const uri = URL.createObjectURL(file);
        resolve({
          uri,
          file,
        });
      } else {
        reject(new Error("No file selected"));
      }
    };
    input.onerror = (e) => {
      reject(new Error("An error occurred while selecting the file"));
    };
    input.oncancel = () => {
      reject(new Error("No file selected"));
    };
  });
};
