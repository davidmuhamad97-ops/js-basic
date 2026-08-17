class PersegiPanjang{
    #panjang
    #lebar

    constructor(){
        this.#panjang = 0
        this.#lebar = 0
    }

    set panjang(panjang){
        this.#panjang = panjang
    }

    get panjang(){
        return this.#panjang
    }

    set lebar(lebar){
        this.#lebar = lebar
    }

    get lebar(){
        return this.#lebar
    }

    luas(){
        return this.#panjang * this.#lebar
    }

    keliling(){
        return 2 * (this.#panjang + this.#lebar)
    }
}

const bangun = new PersegiPanjang()
bangun.panjang = 11 
bangun.lebar = 12

console.log(`Panjang = ${bangun.panjang}\nLebar = ${bangun.lebar}\nLuas = ${bangun.luas()}\nKeliling = ${bangun.keliling()}`)