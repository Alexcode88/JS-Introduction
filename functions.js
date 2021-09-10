
function addTwoNums( num1, num2 ){
    let result = num1 + num2;

    return result;
}

function multiplyTwoNums( num1, num2 ){
    let result = num1 * num2;
    
    return result;
}

function greeting(){
    console.log( "Hello there!" );
}

let n1 = 20;
let n2 = 30;

let result1 = multiplyTwoNums( n1, n2 );
console.log( result1 );
let result2 = addTwoNums( n1, n2 );
console.log( result2 );

greeting();
greeting();
greeting();
greeting();

/*
let result1 = addTwoNums( n1, n2 );
console.log( "Result1: ", result1 );

let result2 = addTwoNums( 40, 60 );
console.log( "Result2: ", result2 );

let finalResult = addTwoNums( result1, result2 );
console.log( "Final result: ", finalResult );

let fullName = addTwoNums( "Alfredo ", "Salazar" );
console.log( fullName );
*/


/*
    Parameters + no return
    Paremeters + return
    No Parameters + no return 
    No Parameters + return
*/