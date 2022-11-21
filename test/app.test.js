const { Triangle } = require('../src/app');

const Cube = require('../src/app').Cube;
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});

describe('Testing the Triangle Functions', function() {
    it('1. The length (int) of the Triangle', function(done) {
        let c1 = new Triangle(2, 5);
        expect(c1.getLength()).to.equal(2);
        done();
    });

    it('2. The height (int) of the Triangle', function(done) {
        let c2 = new Triangle(2, 5);
        expect(c2.getHeight()).to.equal(5);
        done();
    });
    
    it('3. The surface area of the Triangle', function(done) {
        let c3 = new Triangle(5, 4);
        expect(c3.getSurfaceArea()).to.equal(10);
        done();
    });
    
    it('4. The length (float) of the Triangle', function(done) {
        let c4 = new Triangle(6.2, 4.7);
        expect(c4.getLength()).to.equal(6.2);
        done();
    });

    it('5. The height (float) of the Triangle', function(done) {
        let c5 = new Triangle(6.2, 4.7);
        expect(c5.getHeight()).to.equal(4.7);
        done();
    });

    it('6. The surface area (float) of the Triangle', function(done) {
        let c6 = new Triangle(6.2, 4.7);
        expect(c6.getSurfaceArea()).to.equal(14.57);
        done();
    });
    
});