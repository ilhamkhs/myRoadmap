/*
Materi: this dasar.
Memahami isi `this` saat dipakai di dalam object.
*/

const user = {
  name: "Ilham",
  sayHello() {
    console.log("Halo, saya " + this.name);
  },
};

user.sayHello();
