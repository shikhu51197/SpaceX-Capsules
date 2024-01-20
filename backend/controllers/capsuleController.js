import { Capsule } from "../models/Capsule.js";

export const getCapsuleData = async (req, res) => {
  try {
    let query = {};

    if (req.query.type) {
      query.type = { $regex: new RegExp(req.query.type, "i") };
    }

    if (req.query.original_launch) {
      query.original_launch = {
        $regex: new RegExp(req.query.original_launch, "i"),
      };
    }

    if (req.query.status) {
      query.status = { $regex: new RegExp(req.query.status, "i") };
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const capsules = await Capsule.find(query).skip(skip).limit(limit);

    res.status(200).json({
      success: true,
      capsules,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

export const getSingleCapsule = async (req, res) => {
  try {
    const capsuleId = req.params.id;

    const capsule = await Capsule.findById(capsuleId);

    if (!capsule) {
      return res.status(404).json({
        success: false,
        error: "Capsule not found",
      });
    }

    res.status(200).json({
      success: true,
      capsule,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
