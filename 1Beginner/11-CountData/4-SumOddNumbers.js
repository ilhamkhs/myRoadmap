/*
Materi: 4 SumOddNumbers.
Menghitung data sesuai kebutuhan.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

const arrData = [10, 15, 20, 25, 30, 35];

function sumData(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      total += numbers[i];
    }
  }

  return total;
}

console.log(sumData(arrData));
