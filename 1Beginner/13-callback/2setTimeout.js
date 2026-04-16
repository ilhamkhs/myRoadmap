/*
Materi: 2setTimeout.
Memahami callback: fungsi yang dipanggil belakangan.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

// Callback + waktu (setTimeout)

function selesai() {
  console.log("Selesai");
}

setTimeout(selesai, 2000);
