function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function() {
            resolve('Vishhhh')
        },tempo)
    })
}

esperarPor(3000)
    .then(console.log('Executando promise...'))
    .then(esperarPor)
    .then(console.log('Executando promise...'))
    .then(esperarPor)
    .then(console.log('Executando promise...'))

async function executar(){
    esperarPor(2000)
    console.log(' Async/Await')
}

executar()