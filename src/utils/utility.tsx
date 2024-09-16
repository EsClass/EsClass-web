import { FilePickerOptions, FilePickerResult } from "@/types";
import { enqueueSnackbar } from "notistack";
import { phoneRegex } from "./constants";

export const errorMessage = (error: any) => {
  return error?.response?.data?.message || error?.message || error;
};

export const showMessage = (options: {
  message: string;
  variant: "info" | "warning" | "error" | "success" | "default";
}) => {
  enqueueSnackbar(options.message, {
    anchorOrigin: {
      horizontal: "center",
      vertical: "top",
    },
    style: {
      boxShadow: "none",
      borderRadius: 20,
    },
    variant: options.variant,
  });
};

export const filePicker = ({
  fileType = "image",
}: FilePickerOptions): Promise<FilePickerResult> => {
  const fileTypeMApper = {
    image: "image/*",
    video: "video/*",
    pdf: ".pdf",
    all: "*",
  };
  const input = document.createElement("input");
  input.type = "file";
  input.accept = fileTypeMApper[fileType];
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

export const formatQuery = (query: {
  [key: string]: string | number | undefined | null;
}) => {
  let q = "";
  for (let key in query) {
    if (query[key]) {
      q += `${q.length > 0 ? "&" : ""}${key}=${query[key]}`;
    }
  }
  return q;
};

export const validatePhoneNumber = (phoneNumber: string) => {
  return phoneRegex.test(phoneNumber);
};
export const formatNumber = (phoneNumber: string) => {
  // Remove any non-numeric characters
  let digits = phoneNumber.replace(/\s+/g, "").replace(/\D/g, "");
  return "+234" + digits;
};
