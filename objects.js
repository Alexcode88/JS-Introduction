

let car = {
    color: "blue",
    year: 2018,
    make: "Toyota",
    numSeats: 5,
    printInfo: function( message ){
        console.log( message );
        console.log( "Color: ", this.color );
        console.log( "Year: ", this.year );
        console.log( "Make: ", this.make );
        console.log( "Num, seats: ", this.numSeats );
    },
    models: ["v2", "v3", "v4", "LE"],
    countriesAvaialable : {
        country1 : "Costa Rica",
        country2 : "Mexico",
        country3 : "Ecuador"
    }
};

for( let property in car ){
    console.log("-", property );
    console.log( car[property] )
}

/*
let properties = Object.keys( car );
let values = Object.values( car );

console.log( properties );
console.log( values );
*/

// console.log( car.countriesAvaialable.country1 );

/*
let msg = "Car's information";

car.printInfo( msg );

console.log( car.models, car.models.length );

for( let i = 0; i < car.models.length; i ++ ){
    console.log( car.models[i] );
}

*/
/*

console.log( "Car's color: ", car.color );
console.log( "Car's year: ", car["year"] );

let test = "make";
console.log( "Car's make: ", car[test] );
*/