// Import Model Alumni
const Alumni = require('../models/Alumni');
const { Op } = require('sequelize'); // Import Sequelize Operators untuk query lanjutan

/**
 * Kelas untuk mengelola resource Alumni
 */
class AlumniController {
  // Mendapatkan semua data alumni
  async index(req, res) {
    try {
      const alumni = await Alumni.findAll(); // Mengambil semua data alumni
      res.status(200).json({
        success: true,
        data: alumni,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Gagal mengambil data alumni',
        error: error.message,
      });
    }
  }

  // Menambahkan data alumni baru
  async store(req, res) {
    try {
      const newAlumni = await Alumni.create(req.body); // Membuat data alumni baru
      res.status(201).json({
        success: true,
        message: 'Alumni berhasil ditambahkan',
        data: newAlumni,
      });
    } catch (error) {
      res.status(422).json({
        success: false,
        message: 'Gagal menambahkan alumni',
        error: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params; // Ambil ID dari parameter
      const updateData = req.body; // Ambil data yang ingin diupdate dari body
  
      // Cari data alumni berdasarkan ID
      const alumni = await Alumni.findByPk(id);
  
      if (!alumni) {
        // Jika alumni tidak ditemukan
        return res.status(404).json({
          success: false,
          message: 'Resource not found',
        });
      }
  
      // Lakukan update hanya pada kolom tertentu
      await alumni.update(updateData);
  
      // Respon jika berhasil
      res.status(200).json({
        success: true,
        message: 'Resource is updated successfully',
        data: alumni, // Tampilkan data setelah diupdate
      });
    } catch (error) {
      // Tangani error
      console.error('Error updating resource:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating resource',
        error: error.message,
      });
    }
  }
  

  // Menghapus data alumni berdasarkan ID
  async destroy(req, res) {
    try {
      const { id } = req.params; // Mengambil ID dari parameter
      const deletedAlumni = await Alumni.destroy({
        where: { id }, // Kondisi berdasarkan ID
      });

      if (deletedAlumni) {
        res.status(200).json({
          success: true,
          message: 'Alumni berhasil dihapus',
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Alumni tidak ditemukan',
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Gagal menghapus alumni',
        error: error.message,
      });
    }
  }

  // Mendapatkan detail data alumni berdasarkan ID
  async show(req, res) {
    try {
      const { id } = req.params; // Mengambil ID dari parameter
      const alumni = await Alumni.findByPk(id); // Mencari data berdasarkan Primary Key

      if (alumni) {
        res.status(200).json({
          success: true,
          data: alumni,
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Alumni tidak ditemukan',
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Gagal mengambil detail alumni',
        error: error.message,
      });
    }
  }

  // Mencari data alumni berdasarkan nama
  async search(req, res) {
    try {
      const { name } = req.params; // Mengambil nama dari parameter
      const alumni = await Alumni.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`, // Mencari nama yang mengandung substring tertentu
          },
        },
      });

      res.status(200).json({
        success: true,
        data: alumni,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Gagal mencari alumni berdasarkan nama',
        error: error.message,
      });
    }
  }

  // Mendapatkan data alumni dengan status "fresh-graduate"
  async freshGraduate(req, res) {
    try {
      const alumni = await Alumni.findAll({
        where: {
          status: 'fresh-graduate', // Kondisi status "fresh-graduate"
        },
      });

      res.status(200).json({
        success: true,
        data: alumni,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Gagal mengambil data fresh graduate',
        error: error.message,
      });
    }
  }

  // Mendapatkan data alumni dengan status "employed"
  async employed(req, res) {
    try {
      const alumni = await Alumni.findAll({
        where: {
          status: 'employed', // Kondisi status "employed"
        },
      });

      res.status(200).json({
        success: true,
        data: alumni,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Gagal mengambil data employed alumni',
        error: error.message,
      });
    }
  }

    // Mendapatkan data alumni dengan status "unemployed"
  async unemployed(req, res) {
    try {
      const alumni = await Alumni.findAll({
        where: {
          status: 'unemployed', // Kondisi status "unemployed"
        },
      });

      res.status(200).json({
        success: true,
        data: alumni,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Gagal mengambil data unemployed alumni',
        error: error.message,
      });
    }
  }

}

// Membuat objek dari AlumniController
const object = new AlumniController();

// Mengekspor objek AlumniController
module.exports = object;
