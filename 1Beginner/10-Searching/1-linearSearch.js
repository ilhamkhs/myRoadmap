/*
Materi: 1 linearSearch.
Mencari data tertentu dari kumpulan data.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

const arrayAngkaRandom = [10, 99, 70, 34, 46, 24];
const nilaiTarget1 = 77;
const nilaiTarget2 = 100;

// Function linear search
function linearSearch(arrayData, nilaiTarget) {
  for (let i = 0; i < arrayData.length; i++) {
    if (arrayData[i] === nilaiTarget) {
      return i;
    }
  }

  return -1;
}

const result = linearSearch(arrayAngkaRandom, 46);
if (result !== -1) {
  console.log(`Data ditemukan pada index ke: ${result}`);
} else {
  console.log(`Data tidak ditemukan`);
}
