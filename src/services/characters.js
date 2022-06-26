export const getCharacters = ({ page }) => {
    return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => response.json())
        .then(data => data.results)
        .catch(error => console.log(error))
}

export const getInfo = () => {
    return fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => data.info)
        .catch(error => console.log(error))
}

export const getPlace = ({ url }) => {
    return fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error))
}