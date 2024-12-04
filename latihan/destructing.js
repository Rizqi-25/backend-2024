const user = {
    nama: "Muhammad Rizqi",
    umur: 23,
    alamat: "Depok",
    isMarried: false
};

// const nama = user.nama;
// const umur = user.umur;
// const alamat = user.alamat;

const {nama , umur, alamat} = user;
console.log(nama, umur, alamat);

const family = ["Jim","Tabitha", "Julie", "Ethan"];

// const husband = family[0];
// const wife = family[1];
// const firstChildren = family[2];
// const lastChildren = family[3];

const [husband, wife, firstChildren, lastChildren] = family;

console.log(husband, wife, firstChildren, lastChildren);