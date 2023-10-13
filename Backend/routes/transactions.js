const{ addIncome, getIncomes, deleteIncomes } = require('../controllers/income')

const route = require('express').Router();

route.post('/add-income', addIncome)
route.get('/get-incomes', getIncomes);
route.delete('/delete-income/:id', deleteIncomes);

module.exports = route

