const { httpError } = require('../helpers/handleError.helper')
const userModel = require('../models/users.model');

const getItems = async (req, res) => {
  try {
    const records = await userModel.find({})
    res.send({ data: records })
  } catch (e) {
    httpError(res, e)
  }
}

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const records = await userModel.findById(id)
    res.send({ data: records })
  } catch (e) {
    httpError(res, e)
  }
}

const createItem = async (req, res) => {
  try {
    const { name, age, email } = req.body
    const record = await userModel.create({
      name, age, email
    })
    res.send({ data: record })
  } catch (e) {
    httpError(res, e)
  }
}

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    // const records = await userModel.findByIdAndUpdate(id, req.body)
    const records = await userModel.findOneAndUpdate(id, req.body, { returnNewDocument: true })
    res.send({ data: records })
  } catch (e) {
    httpError(res, e)
  }
}

const deleteItem = (req, res) => {
  
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }