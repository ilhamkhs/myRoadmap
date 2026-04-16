/*
Materi: 2 shortFunction.
Menulis fungsi dengan gaya singkat (arrow function).
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

//lebih baik membuat function seperti ini:

// 1.
const sayBye = name => {
  console.log("Bye, " + name);
};
sayBye("Randy");

// 2.
const add = (x, y) => x + y;

console.log(add(4, 4));
