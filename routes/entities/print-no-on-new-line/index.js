const printNoOnNewLine = (req, res) => {
    if (validator.validateParams(req.params.no)) {
        let i = 1, result = [];
        while (i <= req.params.no) {
            result.push(i);
            i += 1;
        }
        res.render('pages/index', { result });
    } else {
        res.status(500).json("API accepts only number")

    }
}

module.exports = { printNoOnNewLine };