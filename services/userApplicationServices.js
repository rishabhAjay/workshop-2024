import {
  post_application_by_jobId_query,
  edit_application_by_id_query,
  get_applications_by_user_query,
  delete_application_by_id_query,
} from "../data/userApplicationQueries.js";
import { check_user_query_by_id } from "../data/userRegisterQueries.js";

export const post_application_by_jobId_service = async (req, res) => {
  const userId = req.user.id;
  try {
    const { skills } = req.body;

    await post_application_by_jobId_query(userId, skills);
    res.status(200).json({ message: "successfully added" });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};

export const get_applications_by_user_service = async (req, res) => {
  try {
    const user = req.user.id;
    const result = await get_applications_by_user_query(user);

    res.status(200).json({ result });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
};

export const edit_application_by_id_service = async (req, res) => {
  try {
    const { applicationId } = req.params;

    const user = req.user.id;
    const { skills } = req.body;
    const result = await edit_application_by_id_query(
      applicationId,
      user,
      skills
    );
    res.json({ result });
  } catch (error) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};

export const delete_application_by_id_service = async (req, res) => {
  try {
    const { applicationId } = req.params;

    const user = req.user.id;

    await delete_application_by_id_query(applicationId, user);
    res.json({ message: "successfully deleted" });
  } catch (error) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};
