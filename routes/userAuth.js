import express from "express";

import auth from "../middleware/auth.js";

import {
  logged_user_service,
  login_user_service,
} from "../services/userAuthService.js";
const router = express.Router();

/*
route: api/auth
method: GET
description: get user's details
access: private
*/

router.get("/", auth, logged_user_service);

/*
route: api/auth
method: POST
description: login a user
access: public
*/

router.post(
  "/",
  login_user_service
);

export default router;
