import Application from "../models/applicationModel.js";

export const post_application_by_jobId_query = (user, skills) => {
  const finalResult = new Application({
    user,
    skills: [...skills],
  });

  return finalResult.save();
};

export const get_applications_by_user_query = (user) => {
  const result = Application.find({
    user,
  }).exec();
  return result;
};

export const edit_application_by_id_query = (
  applicationId,
  user,
  skills
) => {
  const result = Application.findOneAndUpdate(
    { _id: applicationId, user },
    {
      $set: {
        skills,
      },
    },
    { new: true }
  ).exec();
  return result;
};

export const delete_application_by_id_query = (applicationId, user) => {
  const result = Application.findOneAndDelete({
    _id: applicationId,
    user,
  }).exec();
  return result;
};

