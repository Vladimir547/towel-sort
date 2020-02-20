
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if(matrix== undefined||matrix.length==0){
    return [];
  }
  while(matrix.length){
    result = result.concat(matrix.shift());
    if(!matrix.length){
      break;
    } else{
      result = result.concat(matrix.shift().reverse());
    }
    
  }

  return result;
}
