const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaType.ObjectId;

const BuildingSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: [true, "Please enter the address of the building"],
    },
    serviceIds: [{ type: ObjectId, ref: "Service" }],
    doorIds: [{ type: ObjectId, ref: "Door" }],
  },
  { timestamps: true }
);

const Building = mongoose.model("Building", BuildingSchema);

module.exports = Building;
