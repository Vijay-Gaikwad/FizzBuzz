const validator = require('../../utilities/validator')

const printFizzBuzz = (req, res) => {
    if (validator.validateParams(req.params.no)) {
        let i = 1, result = [];
        while (i <= req.params.no) {
            if (i % 3 == 0 || i % 5 == 0) {
                result.push("FizzBuzz");
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

module.exports = { printFizzBuzz };