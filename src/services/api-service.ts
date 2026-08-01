import axios from 'axios'

const API_BASE_URL = (window as any).env.API_BASE_URL;

let cachedUser: any;

const apiService = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

apiService.interceptors.request.use((config) => {
    try {
        if (!cachedUser) {
            const user = window.localStorage.getItem("user");
            if (user) {
                cachedUser = JSON.parse(user);
            }
        }

        if (config.url == "login") {
            cachedUser = null;
        }
        
        if (cachedUser) {
            const token = cachedUser["token"];
            if (token) {
                config.headers["Authorization"] = "Bearer " + token;
                if (config.url == "logout") {
                    cachedUser = null;
                }
            }
        }
    } catch (error) {
        console.log(error);
    }

    const csrfToken = document.querySelector('meta[name="csrf-token"]');
    if (csrfToken) {
        const token = csrfToken.getAttribute("content");

        if (token) {
            config.headers["X-CSRF-TOKEN"] = token;
        }
    }

    return config;
});

export default apiService