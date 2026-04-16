/*
Materi: 1multiplication.
Mengulang proses dengan perulangan.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

// Creating multiplication number using for loop

function getMultiplicationTable(n) {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(`${n} * ${i} = ${n * i}`);
  }
  return result; // kembalikan array semua hasil
}

// Driver code
let n = 5;
let table = getMultiplicationTable(n);

// Cetak rapi sekaligus
console.log(table.join("\n"));
