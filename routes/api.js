const StudentController = require("../controllers/StudentControllers.js");
const express = require('express');
const { check } = require("express-validator");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, Express!");
});

// Routing Student
router.get("/students", StudentController.index); // Menampilkan semua data student
router.get("/students/:id", StudentController.show); // Menampilkan data student berdasarkan id
// Menambahkan data student baru dengan express validator
router.post(
    "/students",
    [
      check("nama").notEmpty().withMessage("Nama wajib diisi"),
      check("prodi").notEmpty().withMessage("Prodi wajib diisi"),
      check("email").isEmail().withMessage("Email harus valid"),
    ],
    StudentController.store
  ); 
router.put("/students/:id", StudentController.update); // Mengupdate data student berdasarkan id
router.delete("/students/:id", StudentController.destroy); // Menghapus data student berdasarkan id


module.exports = router;