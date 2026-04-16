/*
Materi: 5 SumAnObject.
Menghitung data sesuai kebutuhan.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

const users = [
  { name: "Budi", age: 20 },
  { name: "Rafi", age: 25 },
  { name: "Firman", age: 30 },
];

let totalAge = 0;

for (let i = 0; i < users.length; i++) {
  totalAge += users[i].age;
}

console.log(totalAge);
