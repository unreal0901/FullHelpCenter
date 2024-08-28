const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: "text",
    },
    description: {
      type: String,
      required: true,
      index: "text",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Topic", topicSchema);
