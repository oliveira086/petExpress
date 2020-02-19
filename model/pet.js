let pets = [{nome:'Dog'},{nome:'Batman'},{nome:'Scooby'}]

let listarPets = () => {
    let conteudo = ''
    for(let pet of pets){
        conteudo+= `
        Nome:${pet.nome}
        <br>`
    }
    return conteudo
}

const adicionarPet = novoPet => {
    return pets.push(novoPet)

}

const buscarPet = petBuscado =>{

    let lista = []

    pets.filter( function(pet){
        if(pet.nome == petBuscado.nome){
            lista.push(petBuscado.nome)
        }
    })

    return(lista)

    
}

module.exports = {listarPets, adicionarPet, buscarPet}