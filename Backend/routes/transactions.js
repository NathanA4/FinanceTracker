const { getExpense, deleteExpense, addExpense } = require('../controllers/exp');
const{ addIncome, getIncomes, deleteIncomes } = require('../controllers/income');

const route = require('express').Router();

route.post('/add-income', addIncome);
route.get('/get-incomes', getIncomes);
route.delete('/delete-income/:id', deleteIncomes);
route.post('/add-expense', addExpense)
route.get('/get-expense', getExpense);
route.delete('/delete-expense/:id', deleteExpense);

module.exports = route;

