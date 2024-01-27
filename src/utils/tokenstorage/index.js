import { getLocalStorage, setLocalStorage } from "../localstorage"

const TOKEN = "token";

export const setToken = (token) => {
    setLocalStorage(TOKEN, {token});
}

export const getToken = () => {
    return getLocalStorage(TOKEN)?.token;
}
export const isLogin = () => {
    return !!getLocalStorage(TOKEN)?.token;
}