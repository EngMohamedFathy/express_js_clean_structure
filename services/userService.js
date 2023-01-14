
const { User } = require("../db/models");

const getAllUsers = (page=1,limit=1000) => {
    const offset = page * limit;
    return User.findAndCountAll({
        limit: limit,
        offset: offset,
        order: [["id", "ASC"]],
    })
};

const getUserById = (userId) => {
    return User.findByPk(userId)
};

const createNewUser = (newUser) => {
    const user = User.create(
       {
           firstName: newUser.first_name,
           lastName: newUser.last_name,
           email: newUser.email,
           createdAt: new Date(),
           updatedAt: new Date()
       }
    )
    return user;
};

const updateUser = (userId, newUser) => {
    const user = User.update(
        {
            firstName: newUser.first_name,
            lastName: newUser.last_name,
            email: newUser.email,
        },
        {
            where: { id: userId },
            plain: true
        }
    )
    return user;
};

const deleteUser = (userId) => {
    const count = User.destroy({ where: { id: userId } })
    return count;
};

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser,
};
