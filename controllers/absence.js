
const { absence } = require("../models/absence");


const createAbsence = async (req, res, next) => {
  const {nature ,examenId, matiereId, seanceId, moduleId } = req.body;
  try {
    const createAbsence = await absence.create({
     nature,
     examenId,
     matiereId,
     seanceId,
     moduleId,
    });
    res.status(201).json({
        createAbsence,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getAbsence = async (req, res) => {
    try {
      const { absentId } = req.params;
      const absentData = await absence.findOne({
        where: { id: absentId },
      });
      if (!absentData) {
        throw new Error("User not found");
      }
      res.status(200).json({
        absentData
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
  const updateAbsence = async (req, res) => {
    try {
      const { absentId } = req.params;
      const [updated] = await absence.update(req.body, {
        where: { id: absentId },
      });
      if (updated) {
        const updatedAbsence = await absence.findOne({ where: { id: absentId } });
        res.status(200).json({
          absence: updateAbsence,
        });
      }
      throw new Error("Absence not found");
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
  const deleteAbsence = async (req, res) => {
    try {
      const { absentId } = req.params;
      const deleted = await absence.destroy({
        where: { id: absentId },
      });
      if (!deleted) {
        throw new Error("Absence not found");
      }
      res.status(204).send("Absence deleted");
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
  const getAllAbsences = async (req, res) => {
    try {
      const absences = await absence.findAll();
      if(!absences){
          throw new Error("No absence found");
      }
      res.status(200).json({
        absences,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
  module.exports = {
    createAbsence,
    getAllAbsences,
    updateAbsence,
    deleteAbsence,
    getAbsence,
  };
  