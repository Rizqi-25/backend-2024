const { index, store, update, destroy } = require("./fruitController.js");

const main = () => {
    console.log("Method Index - Menampilkan daftar buah");
    index(); // Menampilkan daftar buah awal
    
    // console.log("\n=== Menambahkan buah baru (Semangka) ===");
    store("Semangka"); 
    
    // console.log("\n=== Memperbarui buah (mengganti 'Semangka' dengan 'Melon') ===");
    update("Semangka", "Melon"); // Mengubah "Semangka" menjadi "Melon"
    
    // console.log("\n=== Menghapus buah (Melon) ===");
    destroy("Melon");
    
    // console.log("\n=== Menambahkan buah baru (Apel) ===");
    store("Salak"); 
    
    // console.log("\n=== Menambahkan buah baru (Pisang) ===");
    store("Kelengkeng"); 
};

main();