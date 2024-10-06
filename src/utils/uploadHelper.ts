import { storage } from "@/api/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

/**
 * Converts a base64 data URL to a Blob.
 * @param base64Data The base64 image data (e.g. from canvas.toDataURL()).
 * @param contentType The MIME type of the image (e.g. 'image/png').
 * @returns A Blob representing the image data.
 */
const dataURLToBlob = (
  base64Data: string,
  contentType: string = "image/png"
): Blob => {
  const byteString = atob(base64Data.split(",")[1]);
  const arrayBuffer = new Uint8Array(byteString.length);

  for (let i = 0; i < byteString.length; i++) {
    arrayBuffer[i] = byteString.charCodeAt(i);
  }

  return new Blob([arrayBuffer], { type: contentType });
};

/**
 * Uploads a file or base64 image data to Firebase storage and returns the download URL.
 * @param file The file (original or resized) to be uploaded.
 * @param path The storage path where the file should be uploaded.
 * @returns A Promise that resolves with the download URL of the uploaded file.
 */
export const uploadHelper = async (file: File | string, path: string) => {
  let blob: Blob;

  if (typeof file === "string") {
    // Handle base64 image data (from resized image)
    blob = dataURLToBlob(file); // Convert base64 data to Blob
  } else {
    // Handle regular file upload
    blob = file;
  }

  const storageRef = ref(
    storage,
    `${path}/${Date.now()}_${
      blob instanceof File ? blob.name : "resized_image.png"
    }`
  );
  const uploadTask = await uploadBytes(storageRef, blob); // Upload Blob or File
  const url = await getDownloadURL(uploadTask.ref); // Get the download URL
  return url;
};
