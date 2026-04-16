/*
Materi: 3callbackHell.
Memahami callback: fungsi yang dipanggil belakangan.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

setTimeout(() => {
  console.log("langkah 1");

  setTimeout(() => {
    console.log("langkah 2");

    setTimeout(() => {
      console.log("langkah 3");
    }, 1000);
  }, 1000);
}, 1000);
