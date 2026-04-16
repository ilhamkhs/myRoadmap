/*
Materi: 3 elseIF.
Belajar mengambil keputusan dengan kondisi.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

const number = 10;

if (number < 10) {
  console.log("Satuan");
} else if (number < 100) {
  console.log("Puluhan");
} else if (number < 1000) {
  console.log("Ratusan");
} else {
  console.log(number);
}
