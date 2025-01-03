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

 // Get student by ID
 async show(req, res) {
    const { id } = req.params;

    try {
      const student = await Student.find(id);

      if (!student) {
        return res.status(404).json({ message: "Student tidak ditemukan" });
      }

      res.json({
        message: "Menampilkan data student",
        data: student,
      });
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan", error });
    }
  }// Mendapatkan data student berdasarkan ID

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

  // Update student
  async update(req, res) {
    const { id } = req.params;
    const { nama, prodi, email } = req.body;

    try {
      const result = await Student.update(id, { nama, prodi, email });

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Student tidak ditemukan" });
      }

      res.json({
        message: `Mengupdate data student dengan ID ${id}`,
        data: { id, nama, prodi, email },
      });
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan", error });
    }
  }

  // Delete student
  async destroy(req, res) {
    const { id } = req.params;

    try {
      const result = await Student.delete(id);

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Student tidak ditemukan" });
      }

      res.json({ message: `Menghapus data student dengan ID ${id}` });
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan", error });
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;