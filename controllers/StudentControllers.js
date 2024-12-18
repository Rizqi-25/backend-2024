
class StudentController {
    index(req, res) {
        res.send("Menampilkan semua data mahasiswa");
    }
    store(req, res) {
        res.send("Menambahkan data mahasiswa");
    }
    update(req, res) {
        const {id} = req.params;
        res.send(`Mengupdate data mahasiswa id ${id}`);
    }
    destroy(req, res) {
        const {id} = req.params;
        res.send(`Menghapus data mahasiswa ida ${id}`);
    }
}

const object = new StudentController();

module.exports = object;