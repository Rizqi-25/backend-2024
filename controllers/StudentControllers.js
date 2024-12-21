const student = require("../data/students.js")

class StudentController {
    constructor() {
        // Initialize an array to hold student names
        this.students = student;
        this.index = this.index.bind(this);
        this.store = this.store.bind(this);
        this.update = this.update.bind(this);
    }
    index(req, res) {
        const data = {
            message: "Menampilkan semua data mahasiswa",
            data: this.students,
        };
        // res.send("Menampilkan semua data mahasiswa");
        
        res.json(data);
    }

    store(req, res) {
        const { nama } = req.body;
        this.students.push(nama);
        const data = {
            message: `Menambahkan data mahasiswa: ${nama}`,
            data: this.students, 
        };
        // res.send(`Menambahkan data mahasiswa: ${nama} `);
        res.json(data);
    }   
    update(req, res) {
        const {id} = req.params;
        const { nama } = req.body;
        this.students[id] = nama;
        const data = {
            message: `Mengupdate data mahasiswa dengan ID ${id} menjadi ${nama}`,
            data: this.students, 
        };
        // res.send(`Mengupdate data mahasiswa id ${id}, nama ${nama}`);
        res.json(data);
    }
    destroy(req, res) {
        const {id} = req.params;
        const data = {
            message: `Menghapus data mahasiswa dengan ID ${id}`,
            data: [],
        };
        // res.send(`Menghapus data mahasiswa ida ${id}`);
        res.json(data);
    }
}

const object = new StudentController();

module.exports = object;