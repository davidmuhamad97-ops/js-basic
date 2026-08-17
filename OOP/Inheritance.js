/*
================================================================================
 KONSEP INHERITANCE (PEWARISAN) PADA JAVASCRIPT
================================================================================

 1. APA ITU INHERITANCE?
--------------------------------------------------------------------------------
 Inheritance (pewarisan) adalah mekanisme di mana sebuah class (subclass /
 child class) mewarisi properti dan method dari class lain (superclass /
 parent class).

 Manfaatnya:
 - Reusable code : method & properti yang sama tidak perlu ditulis ulang.
 - Hierarki      : membuat struktur class yang berjenjang (spesialisasi).
 - Konsisten     : perubahan di parent otomatis dirasakan oleh semua child.

 Pada JavaScript, inheritance bekerja melalui PROTOTYPE CHAIN. Ketika sebuah
 child class tidak menemukan suatu method pada dirinya, JavaScript akan
 mencari ke atas mengikuti rantai prototype sampai ke Object.prototype.

 2. SINTAKSIS DASAR: KEYWORD `extends`
--------------------------------------------------------------------------------
 - `extends` dipakai untuk menandakan bahwa sebuah class mewarisi class lain.
 - Nama class yang diwarisi disebut superclass / parent / base class.
 - Class yang mewarisi disebut subclass / child / derived class.
 - Contoh:

 */

class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  makan() {
    console.log(`${this.nama} sedang makan.`);
  }
}

class Anjing extends Hewan {
  // mewarisi constructor, properti, dan method milik Hewan

  menggonggong() {
    console.log(`${this.nama} menggonggong: Guk! Guk!`);
  }
}

const bobby = new Anjing("Bobby");

// Method `makan` diwarisi dari Hewan, tidak perlu ditulis ulang:
bobby.makan(); // => "Bobby sedang makan."

// Method miliknya sendiri:
bobby.menggonggong(); // => "Bobby menggonggong: Guk! Guk!"

/*
 3. KEYWORD `super`
--------------------------------------------------------------------------------
 - `super(...)`      : memanggil constructor milik parent class.
 - `super.namaMethod`: memanggil method milik parent class.
 - Aturan WAJIB      : jika subclass mendefinisikan constructor-nya sendiri,
   ia harus memanggil `super(...)` SEBELUM mengakses `this`.
   Melanggar aturan ini => ReferenceError.
 - Kenapa wajib? Karena `this` pada subclass baru bisa "dibangun" setelah
   inisialisasi parent dijalankan.
 - Contoh:

 */

class Karyawan {
  constructor(nama, gaji) {
    this.nama = nama;
    this.gaji = gaji;
  }

  info() {
    return `${this.nama} bergaji ${this.gaji}`;
  }
}

class Manager extends Karyawan {
  constructor(nama, gaji, tim) {
    super(nama, gaji); // memanggil constructor Karyawan
    this.tim = tim; // properti tambahan milik Manager
  }

  info() {
    // memanggil method parent, lalu memperluasnya
    return `${super.info()} | memimpin tim ${this.tim}`;
  }
}

const manager = new Manager("Sari", 20000000, "Frontend");
console.log(manager.info()); // => "Sari bergaji 20000000 | memimpin tim Frontend"

/*
 4. OVERRIDING (MENIMPA METHOD PARENT)
--------------------------------------------------------------------------------
 - Subclass bisa mendefinisikan ulang method dengan nama yang SAMA
   dengan parent. Method milik subclass yang akan dipakai.
 - Ini disebut method overriding.
 - Jika masih ingin memakai logika parent, gunakan `super.namaMethod()`.

 */

class Kendaraan {
  bergerak() {
    console.log("Kendaraan bergerak dengan kecepatan biasa.");
  }
}

class Motor extends Kendaraan {
  bergerak() {
    console.log("Motor melaju dengan kecepatan tinggi.");
  }
}

class Sepeda extends Kendaraan {
  bergerak() {
    super.bergerak(); // pakai logic parent dulu
    console.log("Sepeda dikayuh perlahan.");
  }
}

new Motor().bergerak(); // => "Motor melaju dengan kecepatan tinggi."
new Sepeda().bergerak(); // => "Kendaraan bergerak..." + "Sepeda dikayuh perlahan."

/*
 5. INHERITANCE MULTI-TINGKAT (CHAINING)
--------------------------------------------------------------------------------
 Inheritance bisa berjenjang lebih dari satu level. Sebuah child bisa
 menjadi parent bagi class lain, membentuk rantai pewarisan.

 */

class Makhluk {
  constructor(nama) {
    this.nama = nama;
  }

  hidup() {
    console.log(`${this.nama} adalah makhluk hidup.`);
  }
}

class Burung extends Makhluk {
  terbang() {
    console.log(`${this.nama} terbang di angkasa.`);
  }
}

class Elang extends Burung {
  // mewarisi dari Makhluk (via Burung) dan dari Burung

  berburu() {
    console.log(`${this.nama} berburu mangsa.`);
  }
}

const elang = new Elang("Elang Jawa");
elang.hidup();   // dari Makhluk (2 level ke atas)
elang.terbang(); // dari Burung (1 level ke atas)
elang.berburu(); // miliknya sendiri

/*
 6. MEMERIKSA HUBUNGAN DENGAN `instanceof`
--------------------------------------------------------------------------------
 - `obj instanceof Class` mengembalikan true jika objek dibuat dari Class
   ATAU dari salah satu class turunannya dalam prototype chain.
 - Sangat berguna untuk mengecek tipe sebelum memproses objek.

 */

console.log(elang instanceof Elang);   // => true
console.log(elang instanceof Burung);  // => true (karena mewarisi Burung)
console.log(elang instanceof Makhluk); // => true (2 level ke atas)
console.log(elang instanceof Object);  // => true (akar semua objek)
console.log(elang instanceof Array);   // => false

/*
 7. STATIC MEMBER JUGA DIWARISI
--------------------------------------------------------------------------------
 - Method/properti static juga ikut diwarisi oleh subclass.
 - Dipanggil lewat nama class anak, bukan lewat instance.

 */

class Bentuk {
  static kategori() {
    return "Bentuk geometri";
  }
}

class Lingkaran extends Bentuk {}

console.log(Lingkaran.kategori()); // => "Bentuk geometri"

/*
 8. GETTER/SETTER DAN PRIVATE FIELD DALAM INHERITANCE
--------------------------------------------------------------------------------
 - Getter/setter ikut diwarisi dan bisa di-override di subclass.
 - Private field (`#...`) TIDAK diwarisi. Ia hanya bisa diakses di dalam
   class yang mendefinisikannya. Subclass tidak bisa mengakses field
   private milik parent.
   (Gunakan protected via method biasa, atau `_` sebagai konvensi.)

 */

class Akun {
  #saldo = 0;

  constructor(awal) {
    this.#saldo = awal;
  }

  getSaldo() {
    return this.#saldo; // method public yang meng-ekspos field private
  }
}

class AkunPremium extends Akun {
  // tetap bisa memakai getSaldo() yang diwarisi
}

const akun = new AkunPremium(5000000);
console.log(akun.getSaldo()); // => 5000000
// console.log(akun.#saldo); // ERROR! #saldo tidak bisa diakses dari subclass.

/*
 9. CONTOH PENUH YANG LEBIH REALISTIS
--------------------------------------------------------------------------------
 */

class Produk {
  constructor(nama, harga) {
    this.nama = nama;
    this.harga = harga;
  }

  deskripsi() {
    return `${this.nama} seharga ${this.harga}`;
  }
}

class Elektronik extends Produk {
  constructor(nama, harga, garansi) {
    super(nama, harga);
    this.garansi = garansi;
  }

  deskripsi() {
    return `${super.deskripsi()} dengan garansi ${this.garansi} tahun`;
  }
}

class Makanan extends Produk {
  constructor(nama, harga, kedaluwarsa) {
    super(nama, harga);
    this.kedaluwarsa = kedaluwarsa;
  }
}

const laptop = new Elektronik("Laptop", 15000000, 2);
const susu = new Makanan("Susu", 25000, "2026-08-17");

console.log(laptop.deskripsi()); // => "Laptop seharga 15000000 dengan garansi 2 tahun"
console.log(susu.deskripsi()); // => "Susu seharga 25000" (inheritance polos)

// Menangani banyak objek berbeda secara seragam berkat warisan bersama:
const keranjang = [laptop, susu];
keranjang.forEach((item) => console.log(item.deskripsi()));

/*
 10. HAL-HAL YANG PERLU DIWASPADAI
--------------------------------------------------------------------------------
 a. `super()` WAJIB dipanggil sebelum `this` di constructor subclass.
 b. Private field `#...` tidak diwariskan ke subclass.
 c. `instanceof` mengecek SELURUH prototype chain, bukan hanya class terdekat.
 d. Rantai pewarisan yang terlalu dalam membuat kode sulit dilacak.
    Gunakan komposisi jika hierarki mulai rumit.
 e. Constructor subclass boleh tidak mendefinisikan constructor sendiri;
    dalam kasus itu, constructor parent otomatis dipakai.
 f. Class hanya bisa memiliki SATU parent (single inheritance).

 11. RANGKUMAN
--------------------------------------------------------------------------------
 - extends  : menandakan sebuah class mewarisi class lain.
 - super()  : memanggil constructor parent (wajib sebelum `this`).
 - super.method() : memanggil method parent saat overriding.
 - overriding : menulis ulang method parent di subclass.
 - prototype chain : jalur pencarian method ke atas hingga Object.prototype.
 - instanceof : memeriksa apakah objek termasuk dalam rantai warisan.

 Inheritance membuat kode lebih reusable dan terstruktur. Gunakan secara
 bijak — wariskan hanya yang memang benar-benar "IS-A" (contoh: Elang
 IS-A Burung), bukan sekadar agar kode tidak mengetik ulang.
================================================================================
*/