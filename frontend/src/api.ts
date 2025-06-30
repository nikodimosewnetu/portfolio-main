export const API_BASE_URL = "https://your-backend.onrender.com";

import axios from "axios";

export const api = axios.create({
  baseURL: API_BASE_URL,
}); 