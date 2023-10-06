const{ addIncome, getIncomes, deleteIncomes } = require('../controllers/income')

const exprouter = require('express').Router();

exprouter.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncomes)
module.exports = exprouter