
/*
    If the number is divisible by three 3  - Print fizz instead of the number
    If the number is divisible by five 5   - Prit buzz instead of the number
    If the number is divisible by both 3,5 - Print fizzbuzz

    1-20

    1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz

*/

function fizzBuzzSequence( limit ){
    for( let i = 1; i <= limit; i ++ ){
        if( i % 5 === 0 && i % 3 === 0 ){
            console.log( "FizzBuzz" );
        }
        else{
            if( i % 5 === 0 ){
                console.log( "Buzz" );
            }
            else{
                if( i % 3 === 0 ){
                    console.log( "Fizz" );
                }
                else{
                    console.log( i );
                }
            }
        }
    }
}

fizzBuzzSequence( 20 );
console.log( "------------" );
fizzBuzzSequence( 100 );
