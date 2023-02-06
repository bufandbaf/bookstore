enum Brand {
    FORD = 'FORD',
    AUDI = 'AUDI',
    SKODA = 'SKODA',
}

interface ICar {
    code: string;
    colour: string;
    brand: Brand;
}

interface ICarCreate extends Pick<ICar, 'colour' | 'brand'> {}

const cars: ICar[] = [
    {
        code: 'uuid-1',
        brand: Brand.AUDI,
        colour: 'green',
    },
    {
        code: 'uuid-2',
        brand: Brand.SKODA,
        colour: 'white',
    },
    {
        code: 'uuid-3',
        brand: Brand.FORD,
        colour: 'red',
    },
    {
        code: 'uuid-4',
        brand: Brand.AUDI,
        colour: 'black',
    },
]

function createCar(newCar: ICarCreate) {
    const code = `uuid-${Math.floor(Math.random() * 1000000000)}`;
    const car: ICar = {
        code,
        brand: newCar.brand,
        colour: newCar.colour,
    }
    cars.push(car);
    return car;
}

console.clear()
// ukázka rozdílu mezi ENUM (pevně stanovené hodnoty) a string (libovolný string)
createCar({brand: Brand.AUDI, colour: 'červená'});
console.log('new car:', cars[cars.length - 1]);