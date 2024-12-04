const nilai = 85;

if (nilai > 90){
    grade = 'A';
}
else if (nilai > 80){
    grade = 'B';
}
else {
    grade = 'C';
}

console.log(`Nilai Anda: ${grade}`);

console.log("================")
// Conditional Ternary operator
const age = 23;

if (age > 21){
    console.log(`Umur Anda: ${age}`);
    console.log("Sudah Dewasa");
}
else {
    console.log(`Umur Anda: ${age}`);
    console.log("Belum Dewasa");
}

const umur = 16;

console.log(`Umur Anda: ${umur}`);
umur > 21 ? console.log("Sudah Dewasa") : console.log("Belum Dewasa");