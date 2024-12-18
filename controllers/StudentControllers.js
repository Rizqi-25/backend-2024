
class StudentController {
    index(req, res) {
        const data = {
            message: "Menampilkan semua data mahasiswa",
            data: ["Muhammad Rizqi", "Mira", "Rere"],
        };
        // res.send("Menampilkan semua data mahasiswa");
        
        res.json(data);
    }

    store(req, res) {
        const { nama } = req.body;
        const data = {
            message: `Menambahkan data mahasiswa: ${nama} `,
            data: [],
        };
        // res.send(`Menambahkan data mahasiswa: ${nama} `);
        res.json(data);
    }   
    update(req, res) {
        const {id} = req.params;
        const { nama } = req.body;
        const data = {
            message: `Mengupdate data mahasiswa id ${id}, nama ${nama}`,
            data: [],
        };
        // res.send(`Mengupdate data mahasiswa id ${id}, nama ${nama}`);
        res.json(data);
    }
    destroy(req, res) {
        const {id} = req.params;
        const data = {
            message: `Menghapus data mahasiswa ida ${id}`,
            data: [],
        };
        // res.send(`Menghapus data mahasiswa ida ${id}`);
        res.json(data);
    }
}

const object = new StudentController();

module.exports = object;