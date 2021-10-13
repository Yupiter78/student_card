export function getValueFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setValueForStorage(key, data) {
    return localStorage.setItem(key, JSON.stringify(data));
}

export function getContent(key) {
    return localStorage.getItem(key);
}

export function getAge(date) {
    return new Date().getFullYear() - new Date(date).getFullYear();
}
