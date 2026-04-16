/*
Materi: 1callback.
Memahami callback: fungsi yang dipanggil belakangan.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

function press(action) {
  action();
}

function turnOnTheLight() {
  console.log("Light is On");
}

function turnOffTheLight() {
  console.log("Light is Off");
}

press(turnOffTheLight);
