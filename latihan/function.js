// Fungsi Deklarasi
function luasLingkarangDeklarasi(r) {
    const PHI = 3.14;
    const luas = PHI * r * r;
    return luas;
}

console.log(`Luas Lingkaran Deklarasi = ${luasLingkarangDeklarasi(6)}`);
console.log(`Luas Lingkaran Deklarasi = ${luasLingkarangDeklarasi(48)}`);

// Fungsi Ekspresi
const luasLingkarangEkspresi = (r) => {
    const PHI = 3.14;
    const luas = PHI * r * r;
    return luas;
};

console.log(`Luas Lingkaran Ekspresi = ${luasLingkarangEkspresi(7)}`);

// Arrow function
const luasLingkarangArrow = (r) => 3.14 * r * r;

console.log(`Luas Lingkaran Arrow = ${luasLingkarangArrow(10)}`);