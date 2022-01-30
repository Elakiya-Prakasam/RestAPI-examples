const mongoose = require("mongoose");
const stringifyFunctionOperators = require("mongoose/lib/helpers/aggregate/stringifyFunctionOperators");
const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedToChannel: {
    type: String,
    required: true,
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
module.exports = mongoose.model("subscriber", subscriberSchema);
