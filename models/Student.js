const db = require("../config/database");

class Student {
  static all() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students";

      db.query(query, (err, results) => {
        resolve(results);
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students WHERE id = ?";

      db.query(query, [id], (err, result) => {
        const [student] = result;
        resolve(student);
      });
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO students (nama, prodi, email) VALUES (?, ?, ?)";

      db.query(query, [data.nama, data.prodi, data.email], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  static update(id, data) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE students SET nama = ?, prodi = ?, email = ? WHERE id = ?";

      db.query(query, [data.nama, data.prodi, data.email, id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM students WHERE id = ?";

      db.query(query, [id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }
}


module.exports = Student;