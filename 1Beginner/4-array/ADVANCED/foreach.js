/*
Materi: foreach.
Menyimpan banyak data dalam satu tempat (array).
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

const users = [
  { name: "Andi", age: 15 },
  { name: "Budi", age: 20 },
  { name: "Cindy", age: 25 },
];

const userSummaries = [];

users.forEach((user) => {
  userSummaries.push(`${user.name} berusia ${user.age} tahun`);
});

console.log(userSummaries);
