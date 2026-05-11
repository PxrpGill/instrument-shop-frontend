import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

const apiInstance = axios.create({ baseURL: BASE_URL, timeout: 30000 });

export default apiInstance;
