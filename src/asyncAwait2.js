function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max)[max,min] = [max,min]
    return new Promise((resolve,reject) => {
        const fator = min - min + 1
        const aleatorio  = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repetido')
        } else {
            resolve(aleatorio)
        }   
    })
}

    async function gerarMegaSena(qtdNumeros){
    try {
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1,60,numeros))
        }
        return numeros   
    } catch (error) {
        throw "Que chato"
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)

