/*
readline.createInterface 

reader 
process.stdin/process.stdout 

addNumbers(sum,numsleft, completionCallback)

if numLeft > 0 
    prompt user for number (w/ reader)
    Pass call back that     
        uses parseInt to parse input 
        increment sum and console.log/print it 
        recursively pass addnumbers with new inputs (increased sum,decreased numsleft, and same completionallback)
if num === 0 
    call completionCallback(sum) which will return totalsum 
*/

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
    
 function addNumbers(sum,numsLeft,completionCallback) {

    if (numsLeft===0) { 
        completionCallback(sum)
        reader.close()
    } else{

    reader.question("What is your number: ", (answer) => {
        let newsum = sum + parseInt(answer)
        console.log (newsum) 
        numsLeft-- 
        
        addNumbers(newsum,numsLeft,completionCallback)
    });

    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

