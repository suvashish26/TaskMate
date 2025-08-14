import { Sequelize } from "sequelize";
import { createUserModel } from "../models/userSchema";
const sequelize = new Sequelize("postgres", "postgres", "shtha@28", {
  host: "localhost",
  dialect: "postgres",
});
// Define UserModel immediately
const UserModel = createUserModel(sequelize);

export const connection = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connection has been established successfully.");
    await sequelize.sync();
    console.log("Database Synced");
  } catch (error) {
    console.error(" Unable to connect to the database:", error);
  }
};

export { sequelize, UserModel };
