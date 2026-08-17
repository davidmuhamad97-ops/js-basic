/*
================================================================================
 KONSEP CLASS PADA JAVASCRIPT (ES6)
================================================================================

 1. APA ITU CLASS?
--------------------------------------------------------------------------------
 Class adalah "blueprint" / cetakan untuk membuat objek. Ia merupakan
 syntactic sugar (gula sintaks) di atas prototype-based inheritance yang
 sudah ada sejak awal JavaScript.

 Dengan class, kita bisa membuat banyak objek yang memiliki bentuk (properti)
 dan perilaku (method) yang sama dengan cara yang bersih dan mudah dibaca.

 Catatan penting:
 - Class TIDAK menambahkan fitur baru ke JavaScript. Ia hanya mempermudah
   cara kerja prototype yang sudah ada.
 - Class bukan hoisted seperti function declaration. Harus dideklarasikan
   DULU sebelum digunakan (kalau tidak, muncul ReferenceError).
 - Kode di dalam class selalu berjalan dalam "strict mode".
 - `typeof class` menghasilkan "function", karena class pada dasarnya
   memang sebuah function.

 2. SINTAKSIS DASAR DEKLARASI CLASS
--------------------------------------------------------------------------------
 class NamaClass {
   // properti & method di sini
 }

 Contoh konkret:

 */

class Animal {
  constructor(nama, kaki) {
    this.nama = nama;
    this.kaki = kaki;
  }

  bersuara() {
    console.log(`${this.nama} mengeluarkan suara.`);
  }
}

/*
 3. MEMBUAT INSTANCE DENGAN KEYWORD `new`
--------------------------------------------------------------------------------
 Class tidak bisa dipanggil begitu saja seperti fungsi biasa.
 Untuk membuat objek dari sebuah class, kita HARUS memakai keyword `new`.

 Ketika `new NamaClass(args)` dijalankan, JavaScript melakukan:
   1. Membuat objek kosong baru.
   2. Mengikat prototype objek tsb ke NamaClass.prototype.
   3. Menjalankan constructor dengan `this` menunjuk ke objek baru tsb.
   4. Mengembalikan objek tsb (kecuali constructor mengembalikan objek lain).

 Tanpa `new`, pemanggilan class akan melempar TypeError.
 */

const kucing = new Animal("Kucing", 4);
kucing.bersuara(); // => "Kucing mengeluarkan suara."

/*
 4. METHOD KHUSUS: CONSTRUCTOR
--------------------------------------------------------------------------------
 - constructor() dipanggil OTOMATIS setiap kali instance dibuat dengan `new`.
 - Fungsinya: menginisialisasi properti dari objek yang baru dibuat.
 - Sebuah class HANYA BOLEH memiliki SATU constructor.
   Jika tidak ditulis, JavaScript menyediakan constructor kosong default.
 - `this` di dalam constructor merujuk ke instance yang sedang dibuat.

 5. METHOD BIASA (INSTANCE METHOD)
--------------------------------------------------------------------------------
 - Method yang ditulis tanpa keyword `function` (shorthand).
 - Hanya bisa dipanggil melalui instance yang sudah dibuat.
 - Method secara otomatis disimpan di prototype class, bukan di setiap
   instance, sehingga hemat memori.

 6. GETTER DAN SETTER
--------------------------------------------------------------------------------
 Class mendukung properti "virtual" melalui getter (accessor) dan setter
 (mutator) menggunakan keyword `get` dan `set`. Ini memungkinkan kita
 menghitung nilai saat diakses, dan memvalidasi nilai saat di-set,
 padahal dari luar tampak seperti properti biasa (tanpa tanda kurung).

 */

class Persegi {
  constructor(sisi) {
    this._sisi = sisi;
  }

  get luas() {
    return this._sisi * this._sisi;
  }

  set sisi(nilaiBaru) {
    if (nilaiBaru > 0) {
      this._sisi = nilaiBaru;
    } else {
      console.log("Sisi harus bernilai positif!");
    }
  }
}

const p = new Persegi(4);
console.log(p.luas); // => 16  (diakses seperti properti biasa, bukan method)
p.sisi = 10; // memicu setter
console.log(p.luas); // => 100

/*
 7. METHOD STATIC
--------------------------------------------------------------------------------
 - Method yang melekat pada class itu sendiri, bukan pada instance.
 - Dipanggil langsung dari nama class, TANPA membuat instance.
 - Biasanya dipakai untuk "utility function" yang berkaitan dengan class.
 - Di dalam method static, `this` merujuk pada class, bukan instance.
 */

class Matematika {
  static tambah(a, b) {
    return a + b;
  }
}

console.log(Matematika.tambah(2, 3)); // => 5

/*
 8. CLASS FIELDS (PROPERTI DI TINGKAT CLASS)
--------------------------------------------------------------------------------
 Sejak ES2022, properti bisa dideklarasikan langsung di dalam body class,
 tidak harus lewat constructor.

 */

class Mobil {
  merk = "Toyota"; // public class field -> otomatis ada di setiap instance
  static jumlahMobil = 0; // static class field

  constructor() {
    Mobil.jumlahMobil++;
  }
}

const m1 = new Mobil();
const m2 = new Mobil();
console.log(m1.merk); // => "Toyota"
console.log(Mobil.jumlahMobil); // => 2

/*
 9. PRIVATE FIELD DENGAN `#` (ES2022)
--------------------------------------------------------------------------------
 - Properti/method private hanya bisa diakses dari dalam class itu sendiri.
 - Ditandai dengan awalan `#` pada namanya.
 - Penting: memakai `_` (underscore) di awal nama BUKAN privat sungguhan,
   itu hanya konvensi penulisan agar programmer lain "tidak menyentuh" properti.
 - Sedangkan `#` benar-benar dilindungi oleh mesin JavaScript.
   Akses dari luar akan melempar error.
 */

class Rekening {
  #saldo; // deklarasi private field

  constructor(awal) {
    this.#saldo = awal;
  }

  setor(jumlah) {
    if (jumlah > 0) {
      this.#saldo += jumlah;
    }
  }

  getSaldo() {
    return this.#saldo;
  }
}

const rek = new Rekening(1000);
rek.setor(500);
console.log(rek.getSaldo()); // => 1500
// console.log(rek.#saldo); // ERROR! Private field tidak bisa diakses dari luar.

/*
 10. CLASS EXPRESSION & ANONYMOUS CLASS
--------------------------------------------------------------------------------
 Sama seperti function, class juga bisa dibuat sebagai expression dan
 ditampung ke dalam variabel. Class yang ditulis tanpa nama disebut
 anonymous class.

 */

const ExpressionClass = class {
  sayHi() {
    console.log("Halo!");
  }
};

new ExpressionClass().sayHi(); // => "Halo!"

/*
 11. CLASS EXPRESSION BERNAMA (NAMED CLASS EXPRESSION)
--------------------------------------------------------------------------------
 Class expression bisa diberi nama internal. Nama internal ini hanya
 dikenali di dalam class tersebut, berguna untuk debugging.

 */

const C = class InternalName {
  intro() {
    console.log(`Nama internal: ${InternalName.name}`);
  }
};

new C().intro(); // => "Nama internal: InternalName"

/*
 12. MEMERIKSA ASAL-USUL OBJEK DENGAN `instanceof`
--------------------------------------------------------------------------------
 Operator `instanceof` mengecek apakah suatu objek dibuat dari class tertentu
 (termasuk dari class turunannya di prototype chain).

 */

const benda = new Rekening(50);
console.log(benda instanceof Rekening); // => true
console.log(benda instanceof Object);   // => true (semua objek turunan Object)

/*
 13. PERBANDINGAN: CLASS vs FUNCTION CONSTRUCTOR
--------------------------------------------------------------------------------
 SEBELUM ES6 (function constructor):

   function Animal(nama) {
     this.nama = nama;
   }
   Animal.prototype.bersuara = function () {
     console.log(this.nama + " bersuara.");
   };

 SESUDAH ES6 (class):

   class Animal {
     constructor(nama) {
       this.nama = nama;
     }
     bersuara() {
       console.log(`${this.nama} bersuara.`);
     }
   }

 Hasil akhirnya SAMA: method bersuara berada di Animal.prototype.
 Perbedaannya hanya pada gaya penulisan; class lebih rapi dan ekspresif.

 14. HAL-HAL YANG PERLU DIWASPADAI
--------------------------------------------------------------------------------
 a. Class TIDAK di-hoist. `new Foo()` sebelum deklarasi Foo => ReferenceError.
 b. Setiap instance memiliki properti `constructor` yang menunjuk balik
    ke class yang membuatnya.
 c. Class tidak bisa dipanggil tanpa `new` (beda dengan function biasa).
 d. Body class selalu berada dalam "strict mode".
 e. Arrow function di dalam class tidak memiliki `this` sendiri
    (penting dipahami saat dipakai sebagai callback / event listener).

 15. RANGKUMAN KATA KUNCI
--------------------------------------------------------------------------------
 - class            : mendeklarasikan blueprint objek.
 - constructor      : menginisialisasi instance saat `new` dipakai.
 - new              : membuat instance dari sebuah class.
 - method           : fungsi milik class, ditulis tanpa keyword function.
 - get / set        : membuat properti virtual dengan akses terkontrol.
 - static           : member yang melekat pada class, bukan instance.
 - # (hash prefix)  : membuat properti/method benar-benar private (ES2022).
 - class field      : deklarasi properti langsung di body class (ES2022).
 - instanceof       : operator untuk mengecek asal-usul objek.

 Dengan menguasai konsep class, kamu bisa membuat banyak objek yang
 terstruktur, reusable, dan mudah dipelihara.
================================================================================
*/
