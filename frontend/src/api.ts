export const API_BASE_URL = "https://portfolio-main-3.onrender.com";

import axios from "axios";

export const api = axios.create({
  baseURL: API_BASE_URL,
}); 
