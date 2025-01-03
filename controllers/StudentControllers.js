const Student = require("../models/Student");
const student = require("../data/students.js")

class StudentController {
// Mendapatkan seluruh resource
async index(req, res) {
    const students = await Student.all();

    const data = {
      message: "Menampilkan data student",
      data: students,
    };

    res.json(data);
  }

  // Menambahkan Data Student
  async store(req, res) {
    const { nama, prodi, email } = req.body;

    if (!nama || !prodi || !email) {
      return res.status(400).json({
        message: "Semua field (nama, prodi, email) wajib diisi",
      });
    }

    try {
      const result = await Student.create({ nama, prodi, email });
      const data = {
        message: `Menambahkan data student dengan ID ${result.insertId}`,
        data: { id: result.insertId, nama, prodi, email },
      };
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan", error });
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;