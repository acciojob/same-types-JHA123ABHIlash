// function isSameType(value1, value2) {
//   //your js code here
// 	let val1=typeof value1;
// 	let val2=typeof value2;
// 	if(val1==val2){
// 		return true;
// 	} else{
// 		return false;
// 	}
// }

// // // do not change the code below.
// let value1 = prompt("Enter Start of the Range.");
// let value2 = prompt("Enter End Of the Range.");
// alert(isSameType(value1, value2));


// solution of SAHIL SIR

function isSameType(value1, value2) {

  if (!isNaN(value1)) {
    value1 = Number(value1);
  }
  if (!isNaN(value2)) {
    value2 = Number(value2);
  }

  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

 
  if (isNaN(value1) || isNaN(value2)) {
    return false;
  }

  if (typeof(value1) === typeof(value2)) {
    return true;
  } else {
    return false;
  }
}
   

let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));