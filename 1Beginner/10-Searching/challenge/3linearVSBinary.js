/*
Materi: 3linearVSBinary.
Mencari data tertentu dari kumpulan data.
File ini berisi latihan sederhana untuk kamu coba sendiri.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

// Binary
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Linear
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

let arr = [];
for (let i = 0; i < 10_000_000; i++) {
  arr.push(i);
}

console.time("Binary");
binarySearch(arr, 9_000_000);
console.timeEnd("Binary");

console.time("Linear");
linearSearch(arr, 9_000_000);
console.timeEnd("Linear");
