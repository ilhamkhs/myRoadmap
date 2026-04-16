/*
Materi: 1 object.
Menyimpan data sederhana dalam bentuk object.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

let users = {
  name: "Budi",
  age: 25,
  address: {
    city: "Jakarta",
    phone: "123123123",
  },
};

const { name: newName } = users;

console.log(newName);
