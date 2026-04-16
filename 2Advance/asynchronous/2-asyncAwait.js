/*
Materi: async/await dasar.
Cara ini membuat kode async terasa seperti kode biasa.
*/

function getUserName() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Andi");
    }, 1000);
  });
}

async function showUserName() {
  const userName = await getUserName();
  console.log("Nama user:", userName);
}

showUserName();
