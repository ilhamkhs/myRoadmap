/*
Materi: 2 DataCount.
Menghitung data sesuai kebutuhan.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

const arrData = [10, 20, 30, 40, 10, 20];

function countData(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    count++;
  }

  return count;
}

console.log(countData(arrData));
