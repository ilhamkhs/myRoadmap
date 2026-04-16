/*
Materi: memakai module.
File ini mengambil fungsi dari file lain.
*/

const { add } = require("./1-mathUtil");

const result = add(10, 5);
console.log("Hasil penjumlahan:", result);
