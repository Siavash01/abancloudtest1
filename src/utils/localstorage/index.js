export const setLocalStorage = (key, obj) =>{
    const strObj = JSON.stringify(obj);
    localStorage.setItem(key, strObj);
}

export const getLocalStorage = (key) => {
    const strObj = localStorage.getItem(key);
    const obj = JSON.parse(strObj) || {};
    return obj;
}