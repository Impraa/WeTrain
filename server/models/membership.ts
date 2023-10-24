import { DataTypes } from "sequelize";
import { sequelize } from "../utils/database";
import User from "./user";

const Membership = sequelize.define("membership", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  expiryDate: {
    type: DataTypes.DATEONLY,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Membership.belongsTo(User, {
  foreignKey: "userId",
});
User.hasOne(Membership, {
  foreignKey: "userId",
});

export default Membership;
