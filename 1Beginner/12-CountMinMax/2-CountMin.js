/*
Materi: 2 CountMin.
Mencari nilai paling kecil dan paling besar.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

const damages = [120, 300, 250, 180, 400, 40];

let minDamage = damages[0];

for (let i = 0; i < damages.length; i++) {
  if (damages[i] < minDamage) {
    minDamage = damages[i];
  }
}

console.log(minDamage);
