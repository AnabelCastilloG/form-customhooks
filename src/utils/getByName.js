export const getByName = (url,name) => {
    if (name.length >= 1) {
        return fetch(`${url}${name}`)
        .then((res) => res.json())
        .catch((e) => console.log(e));
    }
}