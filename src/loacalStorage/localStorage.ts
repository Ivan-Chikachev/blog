import {ThemeType} from "../types/types";

export const LS = {
    setToken: (token: string) => {
        localStorage.setItem('token', token)
    },
    getToken: () => {
       return localStorage.getItem('token')
    },
    removeToken: () => {
        localStorage.removeItem('token')
    },
    getTheme: () => {
        return localStorage.getItem('theme')
    },
    setTheme: (theme: ThemeType) => {
        localStorage.setItem('theme', theme)
    }
}
