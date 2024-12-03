const Transaction = require("../models/Transaction");

exports.addTransaction = async (req, res) => {
    try {
        const { type, category, amount, date } = req.body;
        const transaction = new Transaction({ 
            user: req.user.id, 
            type, 
            category, 
            amount, 
            date 
        });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ user: req.user.id });
        res.json(transactions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
