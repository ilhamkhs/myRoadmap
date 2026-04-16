/*
Materi: 1 CountMax.
Mencari nilai paling kecil dan paling besar.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

const damages = [120, 300, 500, 250, 1804, 400, 600, 40];

let maxDamage = damages[0];

for (let i = 0; i < damages.length; i++) {
  if (damages[i] > maxDamage) {
    maxDamage = damages[i];
  }
}

console.log(maxDamage);
