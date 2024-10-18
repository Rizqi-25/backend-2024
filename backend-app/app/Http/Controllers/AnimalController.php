<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
//     public function index()
//     {
//         echo 'Menampilkan data-data hewan';
//     }

//     public function store(Request $request)
//     {
//         echo 'menambahkan data animals';
//     }

//     public function update(Request $request, $id)
//     {
//         echo 'mengubah data animals dengan id ' . $id;
//     }

//     public function destroy($id)
//     {
//         echo 'menghapus data animals dengan id ' . $id;
//     }

    public $animals = [];

    
    public function __construct() {
        $this->animals = [
            ['id' => 1, 'animal' => "Unta"],
            ['id' => 2, 'animal' => "Komodo"],
            ['id' => 3, 'animal' => "Burung bangau"],
            ['id' => 4, 'animal' => "Ayam Cemani"],
        ];
    }

    
    public function index()
    {
        echo "Index - Menampilkan seluruh hewan <br>";
        foreach ($this->animals as $animal) {
            echo "ID: " . $animal['id'] . " - " . $animal['animal'] . " <br>";
        }
    }

    public function store(Request $request)
    {
        
        $newAnimals = $request->input('animal'); // Retrieve animals from the request

        if (is_array($newAnimals)) {
            $lastId = end($this->animals)['id']; // Get the last ID

            foreach ($newAnimals as $animal) {
                $lastId++; // Increment the ID for each new animal
                array_push($this->animals, ['id' => $lastId, 'animal' => $animal]);
            }

            $output = "Hewan baru berhasil ditambahkan ke kebun binatang.<br>";
        } else {
            // If it's not an array, add the single animal
            $newId = end($this->animals)['id'] + 1;
            array_push($this->animals, ['id' => $newId, 'animal' => $newAnimals]);
            $output = "Hewan '" . $newAnimals . "' berhasil ditambahkan ke kebun binatang dengan ID $newId.<br>";
        }

        // Show the updated list of animals
        $output .= $this->index();

        return response($output, 201)->header('Content-Type', 'text/html');
    }

    
    public function update(Request $request, $id)
    {
       
        foreach ($this->animals as &$animal) {
            if ($animal['id'] == $id) {
                $oldAnimal = $animal['animal'];
                $animal['animal'] = $request->input('animal');
                echo "Hewan '$oldAnimal' dengan ID $id telah di-update menjadi '" . $request->input('animal') . "'.<br>";
                $this->index();
                return;
            }
        }
        echo "Hewan dengan ID $id tidak ditemukan.<br>";
    }

   
    public function destroy($id)
    {
       
        foreach ($this->animals as $index => $animal) {
            if ($animal['id'] == $id) {
                echo "Hewan '" . $animal['animal'] . "' dengan ID $id telah dihapus dari kebun binatang atau dilepaskan ke alam bebas.<br>";
                array_splice($this->animals, $index, 1); 
                $this->index(); 
                return;
            }
        }
        echo "Hewan dengan ID $id tidak ditemukan.<br>";
    }
}
