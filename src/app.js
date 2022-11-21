class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle {
    constructor(length, height) {
        this.length = length;
        this.height = height;
    }
    
    getLength () {
        return this.length;
    }

    getHeight () {
        return this.height;
    }
    
    getSurfaceArea () {
        return (this.length * this.height) / 2;
    }
}

module.exports = {
    Cube:Cube,
    Triangle:Triangle
}