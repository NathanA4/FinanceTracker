const IncomeSchema = require("../models/incomemodel")

exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date} = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try {
        if(!title || !category || !description || !date){
            return res.status(400).json({Error: "Must fill all the fields!"})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({Error: "Must fill all the fields!"})
        }
        await income.save()
        res.status(200).json({Error: 'Income has been Added'})
    } catch (error) {
        res.status(500).json({Error: 'Server Error'})
    }
    console.log(income)
}
exports.getIncomes = async (req, res) =>{
    try {
        const incomes = await IncomeSchema.find().sort({CreatedAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({Error: 'Server Error'})
    }
}
exports.deleteIncomes = async (req, res) => {
    const {id} = req.params;
    console.log(params)
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({Error: 'Income Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({Error: 'Server Error'})
        })
}