/*
Materi: Promise dasar.
Promise dipakai saat proses butuh waktu.
*/

function getGreeting() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Halo dari Promise");
    }, 1000);
  });
}

getGreeting().then((message) => {
  console.log(message);
});
