/*
Materi: try/catch dasar.
Digunakan untuk menangani error supaya program tidak langsung berhenti.
*/

try {
  const data = JSON.parse("{name: Ilham}");
  console.log(data);
} catch (error) {
  console.log("Terjadi error saat membaca data JSON.");
}
