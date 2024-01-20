import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
  name: String,
  flight: String,
});

const capsuleSchema = new mongoose.Schema({
  capsule_serial: String,
  capsule_id: String,
  status: String,
  original_launch: String,
  original_launch_unix: String,
  missions: [missionSchema],
  landings: String,
  type: String,
  details: String,
  reuse_count: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Capsule = mongoose.model('Capsule', capsuleSchema);

export { Capsule };
