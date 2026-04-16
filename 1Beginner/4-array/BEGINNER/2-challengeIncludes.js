/*
Materi: 2 challengeIncludes.
Menyimpan banyak data dalam satu tempat (array).
File ini berisi latihan sederhana untuk kamu coba sendiri.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

const usernames = ["yandi", "dimas", "mita"];

const newUsername = "dimas";
const hasTaken = usernames.includes(newUsername);

if (hasTaken) {
  console.log("Username sudah terdaftar");
} else {
  console.log("Username tersedia");
}
