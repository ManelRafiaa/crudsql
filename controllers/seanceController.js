
const { seance } = require("../models");

const createSeance = async (req, res, next) => {
  const { seancename, dateSeance,  } = req.body;
  try {
    const createSeance = await seance.create({
      seancename,
      dateSeance,
    });
    res.status(201).json({
      createSeance,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const findAbsentBySeance = async (req, res) => {
  try {
    const { seanceId } = req.params;
    const seanceDta = await seance.findOne({
      where: { id: seanceId },
      include: "absences",
    });
    if (!seanceDta) {
      throw new Error("seance not found");
    }
    res.status(200).json({
      seanceDta,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
module.exports = {
  createSeance,
  findAbsentBySeance,
};
