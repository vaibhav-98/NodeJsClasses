//**************** Delete File System***************//
 const fs = require("fs");


 fs.unlink('input.txt', function (err) {
    
    if(err){
        console.log('Error in Delete file');
    }
    else {
        console.log('Deleted File sucessfully');
    }

    
 });










