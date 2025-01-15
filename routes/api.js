// import AlumniController
const AlumniController = require("../controllers/AlumniController.js");
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
const { check, validationResult } = require('express-validator');

const validateStore = [
  check('name').notEmpty().withMessage('Nama tidak boleh kosong'),
  check('phone').notEmpty().withMessage('No Telepon tidak boleh kosong'),
  check('address').notEmpty().withMessage('Alamat tidak boleh kosong'),
  check('graduation_year')
    .isInt({ min: 1900, max: new Date().getFullYear() })
    .withMessage('Tahun Lulus tidak valid'),
  check('status')
    .isIn(['fresh-graduate', 'employed', 'unemployed'])
    .withMessage('Status harus sesuai seperti: fresh-graduate, employed, or unemployed'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Gunakan validasi di route
router.get('/alumni', AlumniController.index);
router.post('/alumni', validateStore, AlumniController.store);
router.get('/alumni/:id', AlumniController.show);
router.get('/alumni/search/:name', AlumniController.search);
router.put('/alumni/:id', AlumniController.update);
router.delete('/alumni/:id', AlumniController.destroy);
router.get('/alumni/status/fresh-graduate', AlumniController.freshGraduate);
router.get('/alumni/status/employed', AlumniController.employed);
router.get('/alumni/status/unemployed', AlumniController.unemployed);

router.get("/", (req, res) => {
  res.send("Hello Alumni API Express");
});

// Membuat routing alumni

// export router
module.exports = router;
