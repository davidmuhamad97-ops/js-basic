const users = [
    { id: 1, name: "John", active: true },
    { id: 2, name: "Jane", active: false },
    { id: 3, name: "David", active: true }
];

function activateUser(user) {
    user.active = true;
    return user;
}

function getActiveUsers(users) {
    return users.filter(user => user.active);
}

// const results = getActiveUsers(users)
// console.log(results)
// console.log(users)

function activateAllUsers(users) {
    users.forEach(user => {
        user.active = true;
    });

    return users;
}

// const results = activateAllUsers(users)
// console.log(results)
// console.log(users)


/**
 * 
 * Tugas

Tentukan:

    1. Apakah activateUser() pure atau impure?
    2. Apakah getActiveUsers() pure atau impure?
    3. Apakah activateAllUsers() pure atau impure?
    4. Mengapa getActiveUsers() bisa dianggap pure sementara activateAllUsers() tidak?
Refactor activateUser() menjadi pure.
Refactor activateAllUsers() menjadi pure.

 Jawaban: 

    1. Fungsi activateUser merupakan sebuah impure function karena fungsi tersebut meneruskan nilai referensi 
       dari argumen disebut pass by reference sehingga memiliki side effect 
    
    2. fungsi getActiveUsers() merupakan pure function karena fungsi tersebut tidak memiliki side effect
       dan langsun menghasilkan alamat memori baru

    3. Fungsi activateAllUsers() merupakan impure function karena fungsi tersebut memiliki side effect 
       yang mengubah variable diluar scope fungsi tersebut karena argumen yang diteruskan merupakan tipe
       referensi.
 * 
 */

// Refactor activateUser() menjadi pure:
// Tidak mengubah argumen asli (user) — buat objek baru via spread,
// input sama => output selalu objek baru yang sama, tanpa side effect.

function activateUserPure(user) {
    return { ...user, active: true };
}

// Refactor activateAllUsers() menjadi pure:
// Tidak mengubah array/objek asli — map() membuat array baru dan
// setiap item dibuat sebagai objek baru (spread). Data asli utuh.

function activateAllUsersPure(users) {
    return users.map(user => ({ ...user, active: true }));
}
