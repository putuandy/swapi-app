export const getIdFromUrl = (url:string) => {
    const arr = url.split("/");
    const id = arr[arr.length - 1];
    return id;
}

export const getKeyFromUrl = (url:string) => {
    const arr = url.split("/");
    const key = `${arr[arr.length - 2]}/${arr[arr.length - 1]}`;
    return key;
}