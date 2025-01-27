import axios from "axios";

import { setLoggedIn } from "@/redux/slices/authSlices";
import store from "@/redux/store";
import { errorMessage } from "@/utils/utility";
import config from "./config";

const axiosServer = axios.create({
  baseURL: config.baseUrl,
  timeout: 100000,
  headers: {
    common: {
      Accept: "*/*",
      channel: "MOBILE",
      "Content-Type": "application/json",
    },
  },
});

export default axiosServer;
