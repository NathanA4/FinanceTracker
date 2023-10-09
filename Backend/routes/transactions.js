const{ addIncome, getIncomes, deleteIncomes } = require('../controllers/income')

const routes = require('express').Router();

routes.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncomes)
module.exports = routes

