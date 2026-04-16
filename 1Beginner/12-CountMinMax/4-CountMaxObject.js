/*
Materi: 4 CountMaxObject.
Mencari nilai paling kecil dan paling besar.
Contoh ini fokus pada satu konsep agar mudah dipahami.
Baca komentarnya perlahan, lalu jalankan kodenya untuk melihat hasilnya.
*/

const heroes = [
  { name: "Axe", damage: 100 },
  { name: "Sven", damage: 300 },
  { name: "Sniper", damage: 200 },
  { name: "Mirana", damage: 100 },
];

let strongestHero = heroes[0];

for (let i = 0; i < heroes.length; i++) {
  if (heroes[i].damage > strongestHero.damage) {
    strongestHero = heroes[i];
  }
}

console.log(strongestHero);
