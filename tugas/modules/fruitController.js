const fruits = require("./fruits.js");

const index = () => {
    for (const fruit of fruits) {
        
        console.log(fruit);
    }
}

const store = (name) => {
    fruits.push(name);
    console.log(`Method Store - Menambahkan Buah ${name}`);  // Menampilkan informasi buah yang ditambah
    index();
}

// Fungsi update
const update = (oldName, newName) => {
    
    const oldFruit = fruits.indexOf(oldName);
    if (oldFruit !== -1) {
        fruits[oldFruit] = newName; // Mengganti buah lama dengan yang baru
        console.log(`Method Update - Update buah ${oldName} menjadi ${newName}`);
    } else {
        console.log(`Buah ${oldName} tidak ada!`);
    }
    index();
}

// Fungsi destroy
const destroy = (name) => {
    const fruit = fruits.indexOf(name);
    if (fruit !== -1) {
        fruits.splice(fruit, 1); // Menghapus buah dari array
        console.log(`Mehod Destroy - Menghapus buah ${name}`);
    } else {
        console.log(`Buah ${name} tidak ada!`);
    }
    index();
}

module.exports = {index, store, update, destroy};