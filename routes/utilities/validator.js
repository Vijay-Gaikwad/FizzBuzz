const validateParams = (requestParams) => {
    const reg = /^\d+$/;
    return reg.test(requestParams);
};

module.exports = {
    validateParams
};