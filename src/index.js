
exports.min = function min (arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  return Math.min(...arr);
}

exports.max = function max (arr) {
  if (!arr || arr.length == 0) {
    return 0;
  }
return Math.max(...arr);
}

exports.avg = function avg (arr) {
  if (!arr || arr.length == 0) {
    return 0;
  }
  else {
    let summ = 0;
    for (let i = 0;i < arr.length;i++){
      summ += arr[i];
    }
    return summ/arr.length  
  }
}
