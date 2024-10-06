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

export const currencyFormatter = (
  value: number | string = 0,
  options?: any
) => {
  let v: string | number = +value;
  const defaultOptions = {
    significantDigits: 2,
    thousandsSeparator: ",",
    decimalSeparator: ".",
    symbol: "₦",
  };
  if (typeof v !== "number") v = 0.0;
  options = { ...defaultOptions, ...options };
  v = v.toFixed(options.significantDigits);

  const [currency, decimal] = v.split(".");
  return `${options.symbol} ${currency.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    options.thousandsSeparator
  )}${options.decimalSeparator}${decimal}`;
};
