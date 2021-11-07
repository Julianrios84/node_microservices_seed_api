const { httpError } = require('../helpers/handleError.helper')
const hotelModel = require('../models/hotels.model')

const getItems = async (req, res) => {
    try {
        const records = await hotelModel.find({})

        //TODO: Simular delay 2 segundos

        setTimeout(() => {
            res.send({ data: records })
        }, 3000)


    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async (req, res) => {
    try {
        const { name, price, room } = req.body
        const record = await hotelModel.create({
            name, price, room
        })
        res.send({ data: record })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }