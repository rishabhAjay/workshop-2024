import {
  logged_user_query,
  login_user_query,
} from "../data/userAuthQueries.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { jwtExpiry, jwtSecret } from "../utils/envVariables.js";

export const logged_user_service = async (req, res) => {
  try {
    const { id } = req.user;
    //return the registered user details but without the password
    const user = await logged_user_query(id);

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

export const login_user_service = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await login_user_query(email);
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(
      payload,
      jwtSecret,
      {
        expiresIn: jwtExpiry,
      },
    );
    return res.json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
};
