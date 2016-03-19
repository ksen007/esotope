## Installation

Make sure that you have the latest version of node.js installed on your machine and you have access to commandline git.

    git clone https://github.com/ksen007/esotope
    cd esotope
    npm install
    
## Check if you can run commandline tool to annotate a JS program.

The following command annotates esotope.js and prints the serialized tree.

    node GetParsedString.js esotope.js
    
## API for usage with tregex

    var getParsedString = require('GetParsedString'); // add suitable path to GetParsedString.js
    var fs = require('fs');
    var code = fs.readFileSync(process.argv[2], "utf8");
    var pCode = getParsedString(code);
    console.log(pCode);

## Do instrumentation for tracking branch coverage

Assuming that you are in esotope directory, do the following:

    cd ..
    git clone https://repo.eecs.berkeley.edu/git/users/ksen/tregex.git 
    cd tregex 
    npm install
    node src/example/JsInstr.js src/example/JsInstrTest.js
    
The last command will run the instrumentor program, JsInstr.js, on a sample JavaScript file, JsInstrTest.js
