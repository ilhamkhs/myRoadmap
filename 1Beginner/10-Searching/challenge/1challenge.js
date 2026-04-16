/*
Materi: 1challenge.
Mencari data tertentu dari kumpulan data.
File ini berisi latihan sederhana untuk kamu coba sendiri.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

const arrayAngkaRandom = [10, 99, 70, 34, 46, 24];

function linearSearch(arrData, valueTarget) {
  for (let i = 0; i < arrData.length; i++) {
    if (arrData[i] === valueTarget) {
      return i;
    }
  }

  return -1;
}

const result = linearSearch(arrayAngkaRandom, 99);
if (result !== -1) {
  console.log(`Data ditemukkan pada index ke ${result}`);
} else {
  console.log(`Data tidak ditemukkan`);
}
