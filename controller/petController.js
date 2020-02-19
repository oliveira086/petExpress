const petModel =  require('../model/pet');

const petController = {
    index: (req, res) => {
        res.send(petModel.listarPets())
    },
    add: (req, res) => {
        let novoPet = req.params
        petModel.adicionarPet(novoPet)
        res.send(`${novoPet.nome} foi adicionado`)
    },
    buscar: (req, res) => {
        res.send('Buscar pet')
    },
    show: (req, res) => {
        res.send('Exibir pet')
    }
}

module.exports = petController