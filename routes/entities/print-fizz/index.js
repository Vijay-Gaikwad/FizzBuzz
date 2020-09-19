const validator = require('../../utilities/validator')

const printFizz = (req, res) => {
    if (validator.validateParams(req.params.no)) {
        let i = 1, result = [];
        while (i <= req.params.no) {
            if (i % 3 == 0) {
                result.push("Fizz");
            } else {
                result.push(i);
            }
            i += 1;
        }
        res.status(200).json(result)
    } else {
        res.status(500).json("API accepts only number")

    }
}

module.exports = { printFizz };