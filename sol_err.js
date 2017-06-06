var fs = require('fs');


var paths = [
  'first-file', // contains 10
  'second-file',// contains 7
  'third-file'// contains 5
];
var totalSum = 0;

//
function printTotalSum() {console.log(totalSum);}

for(var i = 0; i < paths.length; i++){
  fs.readFile(paths[i], 'utf8', function(err,data){
    var num = parseInt(data);
    totalSum += num;
    asyncForEach('+','');

  });
}

printTotalSum();

//invoke the callback
Array.prototype.asyncForEach = function(asyncTask, callback){

  var tmp;
  callback('tmp');  //los callbacks No son asincrónicos
};

function callback(parametro){
     console.log('declarada variable ' + tmp);
}

asyncForEach(asyncTask, printTotalSum);
