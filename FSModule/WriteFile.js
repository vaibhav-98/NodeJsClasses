const fs = require("fs");

fs.writeFile('input.txt', 'Hii, Vaibhav tripathi, ', function (err) {
    if(err){
        console.log('Error in writing File');
    }
    else {
        console.log('sucess in writing file ');
    }
    
});


