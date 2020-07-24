import * as axios from 'axios'

let instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "84df6f8d-3114-43eb-bbd6-9f107dc49f3e"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.1/"
})

export const AuthAPI = {
    auth: () => {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    login: (email, password, rememberMe = false) => {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe,
            // captcha
        }).then(res => {
            return res.data
        })
    },
    logout: () => {
        return instance.delete(`auth/login`).then(rs => rs.data)
    }
}