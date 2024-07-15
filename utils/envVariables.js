import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 4000;
export const mongoURL = process.env.MONGO_URL;
export const jwtSecret = process.env.JWT_SECRET;
export const jwtExpiry = 864000;
