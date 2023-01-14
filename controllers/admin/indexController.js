const {success, error, validation} = require('../../helpers/responseApi')

const getIndex = (request, response) => {
    return success(response)
}

module.exports = {
    getIndex
}
