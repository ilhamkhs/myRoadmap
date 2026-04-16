/*
Materi: 1challengeArrowFunction.
Menulis fungsi dengan gaya singkat (arrow function).
File ini berisi latihan sederhana untuk kamu coba sendiri.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

// 1.
const sayBye = (name) => {
  console.log("Bye, " + name);
};

sayBye("Faris");

// 2.
const add = (x, y) => {
  const z = x + y;
  return z;
};

const result = add(4, 4);
console.log(result);
