
const { matiere } = require("../models");


const createMatiere = async (req, res, next) => {
  const {matierename ,nbrheure, coef } = req.body;
  try {
    const createMatiere = await matiere.create({
    matierename,
    nbrheure,
    coef,
    });
    res.status(201).json({
        createMatiere,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getMatiere = async (req, res) => {
    try {
      const { matiereId } = req.params;
      const matiereData = await matiere.findOne({
        where: { id: matiereId },
      });
      if (!matiereData) {
        throw new Error("Matiere not found");
      }
      res.status(200).json({
        matiereData
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
  const updateMatiere = async (req, res) => {
    try {
      const { matiereId } = req.params;
      const [updated] = await matiere.update(req.body, {
        where: { id: matiereId },
      });
      if (updated) {
        const updatedMatiere = await matiere.findOne({ where: { id: matiereId } });
        res.status(200).json({
          matiere: updateMatiere,
        });
      }
      throw new Error("Matiere not found");
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
  const deleteMatiere = async (req, res) => {
    try {
      const { matiereId } = req.params;
      const deleted = await matiere.destroy({
        where: { id: matiereId },
      });
      if (!deleted) {
        throw new Error("Matiere not found");
      }
      res.status(204).send("Matiere deleted");
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
  const getAllMatiere = async (req, res) => {
    try {
      const matieres = await matiere.findAll();
      if(!matieres){
          throw new Error("No matiere found");
      }
      res.status(200).json({
        matieres,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };

  const findAbsenceByMatiere = async (req, res) => {
    try {
      const { matiereId } = req.params;
      const matiereData = await matiere.findOne({
        where: { id: matiereId },
        include: "absences",
      });
      if (!matiereData) {
        throw new Error("matiere not found");
      }
      res.status(200).json({
        matiereData,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
  module.exports = {
    createMatiere,
    getAllMatiere,
    updateMatiere,
    deleteMatiere,
    getMatiere,
    findAbsenceByMatiere
  };

