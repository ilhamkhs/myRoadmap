/*
Materi: 2 binarySearch.
Mencari data tertentu dari kumpulan data.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

function binarySearch(arr, target, debug = false) {
  // Jika array kosong, data pasti tidak ditemukan.
  if (arr.length === 0) return -1;

  // Jika target di luar rentang nilai array, hentikan lebih awal.
  if (target < arr[0] || target > arr[arr.length - 1]) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Aktifkan debug jika ingin melihat proses pencarian.
    if (debug) {
      console.log(
        `left=${left} mid=${mid} right=${right} >> value mid=${arr[mid]}`,
      );
    }

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(i + 1);
}

const result = binarySearch(arr, 5, true);
console.log(result);
