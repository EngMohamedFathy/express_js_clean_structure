
const userService = require('../../services/userService')
const {success, error, notFound, paging, created, updated, deleted} = require('../../helpers/responseApi')

// to get list of users
const getIndex = async (request, response) => {
    const page = parseInt(request.query.page);
    const limit = parseInt(request.query.limit);

    let users = await userService.getAllUsers(page,limit);
    return success(response,"success",paging(users,page,limit));
}

// to get user details
const getUser = async (request, response) => {
    const userId = request.params.id;
    let user = await userService.getUserById(userId);
    if(user == null){
        return notFound(response);
    }else{
        return success(response,"success",user)
    }
}

// to update user data
const updateUser = async (request, response) => {
    const userId = request.params.id;
    let user = await userService.updateUser(userId,request.body);
    if(user === false){
        return error(response,"Update Error");
    }else{
        return updated(response)
    }
}

// to create new user
const createUser = async (request, response) => {
    let user = await userService.createNewUser(request.body);
    if(user === false){
        return error(response,"Create Error");
    }else{
        return created(response, user)
    }
}

// to delete user
const deleteUser = async (request, response) => {
    const userId = request.params.id;
    let user = await userService.deleteUser(userId);
    if(!user){
        return error(response, "Delete Error");
    }else{
        return deleted(response, user)
    }
}

module.exports = {
    getIndex,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
