import User from "../models/userModel.js";

export const check_user_query_by_email = (email) => {
  let user = User.findOne({ email }).exec();
  return user;
};

export const register_user_query = (name, email, password) => {
  let user = new User({
    name,
    email,
    password,
  })

  return user.save();
};


export const check_user_query_by_id = (id) => {
  let user = User.findOne({ id }).exec();
  return user;
};