class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(
            `${this.name} has a tree density of ${density} trees per square km`
        );
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    classification() {
        const sizeType = new Map();
        sizeType.set(1, "tiny");
        sizeType.set(2, "small");
        sizeType.set(3, "normal");
        sizeType.set(4, "big");
        sizeType.set(5, "huge");
        console.log(
            `${this.name}, built in ${this.buildYear}, is a ${sizeType.get(
                this.size
            )} street`
        );
    }
}

const allParks = [
    new Park("Green Park", 1987, 0.2, 215),
    new Park("Yellow Park", 1997, 0.5, 400),
    new Park("Red Park", 1927, 2, 1000)
];
const allStreets = [
    new Street("Oxford", 2008, 2.7, 1),
    new Street("Richmond", 1990, 2, 5),
    new Street("Huron", 1995, 6, 4)
];

function calc(arr) {
    const sum = arr.reduce((prev, curr, index) => prev + curr, 0);
    return [sum, sum / arr.length];
}

function parkReport(p) {
    p.forEach((el) => el.treeDensity());
    const ages = p.map((el) => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have average age of ${avgAge} years`);
    const i = p.map((el) => el.numTrees).findIndex((el) => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees`);
}

function streetReport(s) {
    const length = s.map((el) => el.length);
    const [totalLength, avgLength] = calc(length)
    console.log(totalLength, avgLength)
    console.log(
        `our ${s.length} streets have a total length of ${totalLength} km, with average length of ${avgLength} km`
    );

    s.forEach((el) => el.classification());
}
console.log(parkReport(allParks));
console.log(streetReport(allStreets));
