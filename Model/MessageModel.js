import sequelize from "../Database/dbconfig.js";
import { DataTypes } from "sequelize";
import User from "./usermodel.js"; // Import the User model

// Synchronize the User model first
await User.sync();

const messages = sequelize.define('massage', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'userData', // Ensure this matches your actual User table name
            key: 'id'
        }
    },
    receiverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'userData',
            key: 'id'
        }
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    referenceUserId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'userData',
            key: 'id'
        }
    }
}, {
    timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
});

// Synchronize the messages model
await messages.sync();

export default messages;
