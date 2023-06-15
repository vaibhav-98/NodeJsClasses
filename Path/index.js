const path = require("path");




// console.log(path.sep)

// console.log(process.env.PATH);


// console.log(path.delimiter);




const currentPath = __filename;
console.log('currentPath >', currentPath);


let basename = path.basename(currentPath)
console.log(' basename>',  basename);

let basenameWithoutExt = path.basename(currentPath, '.js')
console.log(' basenameWithoutExt >' ,  basenameWithoutExt);

let dirname = path.dirname(currentPath)
console.log('dirname >' , dirname); 


let pathToDir = path.join ('/home', 'js', 'dist', 'index.js' );
console.log( 'pathToDir' ,  pathToDir);