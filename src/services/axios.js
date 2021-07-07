import axios from "axios";
import LocalStorageService from "./LocalStorageService";
// import router from "./router/router";

// LocalstorageService
const localStorageService = LocalStorageService.getService();

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const token = localStorageService.getAccessToken();
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjEsIlVzZXJUeXBlIjoxLCJDb21wYW55TmFtZSI6ImdodXJpIiwiT3duZXJOYW1lIjoiem9uaWVlZCIsIkNpdHkiOiJkaGFrYSIsIkFyZWEiOiJkaGFrYSIsIkFkZHJlc3MiOiIiLCJQaG9uZSI6IjAxOTAzNjc0NzY5In0.rWsQ1MoJf-HxgSKDzWOfCyKkqwwTcwDLTr6QY4kZz3Y';

    if (token) {
      config.headers["Authorization"] = "Bearer " + token; // as return full code with token type
      // config.headers['Accept'] = 'application/json';
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
