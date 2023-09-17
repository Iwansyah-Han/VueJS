import { createApp } from 'vue';
import App from './App.vue';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Dashboard from "./components/Dashboard";
import SplashScreen from "./components/SplashScreen";

axios.defaults.baseURL = "https://jwt-asep-5fcb7418385e.herokuapp.com/api/auth";
axios.interceptors.request.use(function (config) {
  return config;
});


const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: SplashScreen },
      { path: "/register", component: RegisterPage },
      { path: "/login", component: LoginPage },
      { path: "/dashboard", component: Dashboard },
    ],
  });

createApp(App).use(router).mount('#app')
