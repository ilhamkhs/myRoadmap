/*
Materi: 3 forInLoop.
Mengulang proses dengan perulangan.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

const user = {
  name: "Ilham",
  age: 28,
  role: "Driver",
};

for (const key in user) {
  console.log(key);
}

for (const key in user) {
  console.log(user[key]);
}
