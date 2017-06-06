var fs = require('fs');


var paths = [
  'first-file', // contains 10
  'second-file',// contains 7
  'third-file'// contains 5
];
var totalSum = 0;

//
function printTotalSum() {console.log(totalSum);}

var asyncTask = function(path, done) {
  fs.readFile(path, 'utf8', function(err, data){
    var num = parseInt(data);
    totalSum += num;
    //we must call done to report to asyncForEach the completion of this iteration
    done();
    /*
    for(var i = 0; i < paths.length; i++){
      fs.readFile(paths[i], 'utf8', function(err,data){
        var num = parseInt(data);
        totalSum += num;
    */
  });
};

paths.asyncForEach(asyncTask, printTotalSum);


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
