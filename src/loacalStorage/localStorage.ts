export const LS = {
    setToken: (token: string): void => {
        localStorage.setItem('token', token)
    }
}
