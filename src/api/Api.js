import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { API_KEY } from "@env";

const Api = () => {
  const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });

  api.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      config.params = {
        ...config.params,
        api_key: API_KEY,
      };
      return config;
    },
    (error) => Promise.reject(error)
  );
  return api;
};

export default Api();
