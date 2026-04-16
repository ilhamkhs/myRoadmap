/*
Materi: 1 DataSum.
Menghitung data sesuai kebutuhan.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

const arrData = [10, 20, 30, 40];

function sumNumbers(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

const result = sumNumbers(arrData);
console.log(result);
