import express from "express";
import auth from "../middleware/auth.js";

import {
  delete_application_by_id_service,
  get_applications_by_user_service,
  post_application_by_jobId_service,
  edit_application_by_id_service,
} from "../services/userApplicationServices.js";
const router = express.Router();

/*
route: api/applications
method: POST
description: create a new application
access: private
*/

router.post(
  "/",
  auth,
  post_application_by_jobId_service
);

/*
route: api/applications
method: GET
description: get applications
access: private
*/

router.get("/", auth, get_applications_by_user_service);

/*
route: api/applications/application/applicationId
method: PUT
description: edit an application
access: private
*/

router.put(
  "/application/:applicationId",
  auth,
  edit_application_by_id_service
);

/*
route: api/applications/application/applicationId
method: DELETE
description: delete application
access: private
*/

router.delete(
  "/application/:applicationId",
  auth,
  delete_application_by_id_service
);

export default router;
