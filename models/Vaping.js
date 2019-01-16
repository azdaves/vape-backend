const mongoose = require("mongoose");

const vapingSchema = new mongoose.Schema(
  {
    devices: [String],
    body_parts: [String],
    opinion: String,
    isItProblem: Boolean,
    oftenSeen: String,
    whereSeen: [String],
    score: Number,
    message: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vaping", vapingSchema);
