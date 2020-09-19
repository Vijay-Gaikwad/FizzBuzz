const validator = require('../../utilities/validator')

const printBuzz = (req, res) => {
    if (validator.validateParams(req.params.no)) {
        let i = 1, result = [];
        while (i <= req.params.no) {
            if (i % 5 == 0) {
                result.push("Buzz");
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

module.exports = { printBuzz };