const ExpenseSchema = require("../models/expmodel")

exports.addExpense = async (req, res) => {
    const {title, amount, category, description, date} = req.body

    const expense = ExpenseSchema({title, amount, category, description, date})
    try {
        if (!title || !category || !description || !date || amount <= 0 || isNaN(amount)) {
            return res.status(400).json({Error: "Must fill all the fields correctly!"})
        }
        if (amount <= 0 || isNaN(amount)) {
            return res.status(400).json({Error: "Amount must be a positive number!"})
        }
        await expense.save();
        res.status(200).json({message: 'Expense has been Added'});
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
    console.log(expense);
}
exports.getExpense = async (req, res) =>{
    try {
        const expenses = await ExpenseSchema.find().sort({CreatedAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({Error: 'Server Error'})
    }
}
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedExpense = await ExpenseSchema.findByIdAndDelete(id);
        if (!deletedExpense) {
            return res.status(404).json({ Error: 'Expense not found' });
        }
        res.status(200).json({ message: 'Expense Deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ Error: 'Server Error' });
    }
};
