//************************* Append File System***********//

const fs = require ("fs");

fs.appendFile('input.txt',', and hello Anshu', function(err){
   
    if(err){
        console.log('Error in Append file');
    }
    else {
        console.log('Append File created');
    }

})













