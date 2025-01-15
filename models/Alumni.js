// Import database (sequelize instance)
const { Sequelize, DataTypes, Model, Op } = require('sequelize');
const sequelize = require('../config/database'); // Pastikan path ini sesuai dengan konfigurasi database Anda

// Membuat class Alumni dengan extend Model
class Alumni extends Model {
  /**
   * Fungsi untuk mendapatkan semua data alumni
   */
  static async getAllAlumni() {
    try {
      return await this.findAll();
    } catch (error) {
      throw new Error('Error fetching alumni data: ' + error.message);
    }
  }

  /**
   * Fungsi untuk mendapatkan data alumni berdasarkan ID
   */
  static async getAlumniById(id) {
    try {
      return await this.findByPk(id);
    } catch (error) {
      throw new Error('Error fetching alumni by ID: ' + error.message);
    }
  }

  /**
   * Fungsi untuk menambahkan alumni baru
   */
  static async addAlumni(data) {
    try {
      return await this.create(data);
    } catch (error) {
      throw new Error('Error adding new alumni: ' + error.message);
    }
  }

  /**
   * Fungsi untuk mengupdate data alumni berdasarkan ID
   */
  static async updateAlumni(id, data) {
    try {
      const [updated] = await this.update(data, { where: { id } });
      return updated ? true : false;
    } catch (error) {
      throw new Error('Error updating alumni: ' + error.message);
    }
  }

  /**
   * Fungsi untuk menghapus alumni berdasarkan ID
   */
  static async deleteAlumni(id) {
    try {
      const deleted = await this.destroy({ where: { id } });
      return deleted ? true : false;
    } catch (error) {
      throw new Error('Error deleting alumni: ' + error.message);
    }
  }

  /**
   * Fungsi untuk mencari alumni berdasarkan nama (substring match)
   */
  static async searchAlumniByName(name) {
    try {
      return await this.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`, // Pencarian nama yang mengandung substring
          },
        },
      });
    } catch (error) {
      throw new Error('Error searching alumni by name: ' + error.message);
    }
  }

  /**
   * Fungsi untuk mendapatkan alumni berdasarkan status
   */
  static async getAlumniByStatus(status) {
    try {
      return await this.findAll({
        where: { status },
      });
    } catch (error) {
      throw new Error('Error fetching alumni by status: ' + error.message);
    }
  }
}

// Definisikan model Alumni
Alumni.init(
  {
    // Kolom ID (Primary Key)
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // Kolom Nama Alumni
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Kolom Nomor Telepon Alumni
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Harus unik
    },
    // Kolom Alamat Alumni
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Kolom Tahun Lulus
    graduation_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Kolom Status Alumni (ENUM)
    status: {
      type: DataTypes.ENUM('fresh-graduate', 'employed', 'unemployed'),
      allowNull: false,
    },
    // Kolom Nama Perusahaan
    company_name: {
      type: DataTypes.STRING,
      allowNull: true, // Boleh null jika belum bekerja
    },
    // Kolom Posisi Pekerjaan
    position: {
      type: DataTypes.STRING,
      allowNull: true, // Boleh null jika belum bekerja
    },
  },
  {
    sequelize, // Instance sequelize
    modelName: 'Alumni', // Nama model
    tableName: 'alumni', // Nama tabel di database
    timestamps: true, // Menambahkan kolom createdAt dan updatedAt
  }
);

// Ekspor model Alumni
module.exports = Alumni;
