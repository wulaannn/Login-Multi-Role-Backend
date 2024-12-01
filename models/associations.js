import Users from "./UsersModel.js";
import Products from "./ProductModel.js";

const createAssociations = () => {
    Users.hasMany(Products);
    Products.belongsTo(Users, {foreignKey: 'userId'});
};

export default createAssociations;