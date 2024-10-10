
<?php
# membuat class Animal
class Animal
{
    # property animals
    public $animals = [];
    # method constructor - mengisi data awal
    # parameter: data hewan (array)
    public function __construct($data) {
        $this->animals = $data;
    }

    # method index - menampilkan data animals
    public function index()
    {
        foreach ($this->animals as $index => $animal) {
            echo ($index + 1) . ". " . $animal . "<br>";
        }
        # gunakan foreach untuk menampilkan data animals (array)
    }

    # method store - menambahkan hewan baru
    # parameter: hewan baru
    public function store($data) {
        array_push($this->animals, $data);
        echo "Hewan '$data' berhasil ditambahkan ke kebun binatang.<br>";
        # gunakan method array_push untuk menambahkan data baru
    }

    # method update - mengupdate hewan
    # parameter: index dan hewan baru
    public function update($index, $data) {
        if (isset($this->animals[$index])) {
            $oldAnimal = $this->animals[$index]; // Simpan nama hewan sebelum di-update
            $this->animals[$index] = $data;
            echo "Hewan '$oldAnimal' telah di-update menjadi '$data'.<br>";
        } else {
            echo "Hewan tersebut tidak ada dalam kebun binatang ini.<br>";
        }
    }

    # method delete - menghapus hewan
    # parameter: index
    public function destroy($index)
    {
        if (isset($this->animals[$index])) {
            $animal = $this->animals[$index]; // Menampilkan nama hewan yang dihapus nama hewan sebelum dihapus
            array_splice($this->animals, $index, 1);
            echo "Hewan '$animal' telah dihapus dari kebun binatang atau dilepaskan ke alam bebas.<br>";
        } else {
            echo "Hewan tersebut tidak ada dalam kebun binatang ini.<br>";
        }
        # gunakan method unset atau array_splice untuk menghapus data array
    }
}



# membuat object
# kirimkan data hewan (array) ke constructor
$animal = new Animal(["Unta", 'Komodo', 'Burung bangau', 'Ayam Cemani']);

echo "Index - Menampilkan seluruh hewan <br>";
$animal->index();
echo "<br>";

echo "Store - Menambahkan hewan baru <br>";
$animal->store('Hiu Megalodon');
$animal->index();
echo "<br>";

echo "Update - Mengupdate hewan <br>";
$animal->update(0, 'Burung Unta');
$animal->index();
echo "<br>";

echo "Destroy - Menghapus hewan dari kebun binatang atau sudah dilepaskan ke alam bebas kembali.<br>";
$animal->destroy(3);
$animal->index();
echo "<br>";

?>