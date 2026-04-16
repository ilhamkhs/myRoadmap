/*
Materi: 3 DataCountWithIF.
Menghitung data sesuai kebutuhan.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

const arrData = [10, 2, 40, 30, 100, 5, 30];

function countData(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      count++;
    }
  }

  return count;
}

console.log(countData(arrData));
