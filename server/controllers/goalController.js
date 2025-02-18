const getGoals = async (req, res) => {
    res.status(200).json({message: 'Get All Goals'})
}

const setGoals = async (req, res) => {
    console.log(req.body.text)
    if (!req.body.text) {
        res.status(400)
        throw new Error('No data')
    }
    res.status(200).json({message: 'Set All Goal'})
}

const updateGoals = async (req, res) => {
    res.status(200).json({message: `Update Goal with id ${req.params.id}`})
}

const deleteGoals = async (req, res) => {
    res.status(200).json({message: `Delete Goal with id ${req.params.id}`})
}

module.exports = { getGoals, setGoals, updateGoals, deleteGoals } ;