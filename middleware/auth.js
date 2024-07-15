import jwt from "jsonwebtoken";
import { jwtSecret } from "../utils/envVariables.js";

const auth = (req, res, next) => {
  //get the token out of the request header
  let token = req.headers.authorization?.split(" ")[1];
  if (token) {
    jwt.verify(token, jwtSecret, (error, decoded) => {
      if (error) {
        return res.status(403).json({
          message: "Unauthorized / token exipred",
        });
      } else {
        if (decoded) {
          req.user = decoded.user;
          next();
        }
      }
    });
  } else {
    return res.status(403).json({ message: "Unauthorized / token exipred" });
  }
};

export default auth;
