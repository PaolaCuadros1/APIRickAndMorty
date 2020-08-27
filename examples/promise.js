/** Promesas */

const result = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve(5 / num)
        } else {
            reject(new Error(' Error: El número no puede ser cero o menor a cero. '))
        }
    })
}

result(1)
    .then(response => { console.log(response) })
    .catch(error => console.error(error))