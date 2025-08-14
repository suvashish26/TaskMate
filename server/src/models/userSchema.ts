import { DataTypes, Sequelize } from "sequelize";
export const createUserModel = (sequelize: Sequelize) => {
  const User = sequelize.define("User", {
    //model name and object with fields
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        isLowercase: true,
      },
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    empID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  return User;
};
