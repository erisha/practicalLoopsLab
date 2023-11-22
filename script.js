console.log('=====Part: 1 Fizz Buzz===');
//Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0){
        console.log(` ${i} Fizz`);
    } else if (i % 5 === 0){
        console.log(`${i} Buzz`);
    } else {
        console.log(i);
    }
}

console.log('=====Part 2: Prime Time====');

for (let n = 5; n <=50; n++ ){
    let isPrime = true 
    for (let i = 2; i< n; i++){
        // i = 2,3,4
        if (n % i == 0){
            isPrime= false; // not a prime num
            break;
        }

    }
    if (isPrime){
        console.log(`${n} is a prime number`);
    }
}

//  loop just goes over all our numbers (5-10), 
// next we create a second for loop to then do some math, to see if our number is divisible. Its tricky because our i variable is dependent on our n variable



console.log('=====Part 3: Feeling Loopy====');


// const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

const csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

let currentCell = 1;
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

// loop over string
for (let i = 0; i < csv.length; i++) {
    // console.log(csv[i]);


    //store each cell in a variable
    if (csv[i] === ","){
        //if comma move to next cell
        currentCell++

    } else if (csv[i] === "\n"){
        // if is a \n  move to next row

        console.log(cell1, cell2, cell3, cell4);
        currentCell = 1
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
    } else {
        if (currentCell === 1){
            cell1 += csv[i];
        }else if (currentCell === 2){
            cell2 += csv[i];
        }else if (currentCell === 3){
            cell3 += csv[i];
        }else if (currentCell === 4){
            cell4 += csv[i];
        }
     }
};

