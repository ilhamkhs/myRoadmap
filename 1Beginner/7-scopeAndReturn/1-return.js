/*
Materi: 1 return.
Memahami nilai balik fungsi dan batas pakai variabel.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

const firstName = "Ilham";
const lastName = "Khasbullah";

function getFullName(firstName, lastName) {
  const fullName = firstName + " " + lastName;

  return fullName;
}

const fullName = getFullName(firstName, lastName);
console.log(fullName);
