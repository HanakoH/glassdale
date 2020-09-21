let witnessess = [];

export const useWitnesses = () => {
    return witnessess.slice()
}

export const getWitnesses = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(parsedResponse => {
        witnessess = parsedResponse;
    })
}