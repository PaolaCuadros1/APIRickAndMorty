console.log("Esto se maneja con callbacks")
const API = 'https://rickandmortyapi.com/api/character/';

function prepareData(apiURL, callback) {
    callback(apiURL)
}

prepareData(API, getData);