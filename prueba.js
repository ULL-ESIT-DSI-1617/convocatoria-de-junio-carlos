var fs = require('fs');


var paths = [
  'first-file', // contains 10
  'second-file',// contains 7
  'third-file'// contains 5
];

function printTotalSum() {console.log(totalSum);}
function callback (totalSum) { console.log('all done the result is ' + totalSum); }

var itemsProcessed = 0;
var totalSum;
[1, 2, 3].forEach((item, index, array) => {
  asyncForEach(item,totalSum, () => {
    itemsProcessed++;
    if(itemsProcessed === array.length) {
      callback(totalSum);
    }
  });
});
printTotalSum();

asyncForEach = function(asyncTask, callback){

  var tmp;
  callback('tmp');  //los callbacks No son asincrónicos
};
asyncForEach();
