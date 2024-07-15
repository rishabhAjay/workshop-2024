import mongoose from "mongoose";

const ApplicationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },

    skills: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("application", ApplicationSchema);
