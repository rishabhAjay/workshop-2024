import express from "express";
import { register_user_service } from "../services/userRegisterService.js";
const router = express.Router();

/*
route: api/register
method: POST
description: register a user
access: public
*/

router.post(
  "/",
  register_user_service
);

export default router;
