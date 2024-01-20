const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    status: {
      type: String,
      enum: [
        "TO DO",
        "IN PROGRESS",
        "REVIEW",
        "TESTING",
        "PENDING SIGNOFF",
        "DONE",
      ],
    },
    clientId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Client'
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Project", ProjectSchema);
