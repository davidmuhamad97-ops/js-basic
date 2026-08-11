class Circle{

    #radius
    #color

    constructor(radius, color){
        this.#radius = radius
        this.#color = color
    }

    set radius(radius){
        this.#radius = radius
    }

    get radius(){
        return this.#radius
    }

    set color(color){
        this.#color = color
    }

    get color(){
        return this.#color
    }

    getArea(){
        return Math.PI * Math.pow(2, this.#radius)
    }
}

class Cylinder extends Circle{

    #height

    constructor(radius, color, height){
        super(radius, color)
        this.#height = height
    }

    set height(height){
        this.#height = height
    }

    get height(){
        return this.#height
    }

    getVolume(){
        let areaCirlce = super.getArea()

        return areaCirlce * this.height
    }
}

const cylinder1 = new Cylinder(2, "red", 3)
console.log("Radius : " + cylinder1.radius)
console.log("Color : " + cylinder1.color)
console.log("Volume : " + cylinder1.getVolume())