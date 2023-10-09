const{ addIncome, getIncomes, deleteIncomes } = require('../controllers/income')

const route = require('express').Router();

route.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncomes)
module.exports = route

