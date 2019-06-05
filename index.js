function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine) {
  for(let i = 0; i < katzDeliLine.length; i++){
    if(katzDeliLine.length=== 0){
      return "There is nobody waiting to be served!"
    } else {
      return `Currently serving ${katzDeliLine.shift()}.`;
    }
  }
}
function currentLine(katzDeliLine) {
  // let str = '';
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  let arr = [];
  for(let i = 0; i < katzDeliLine.length; i++);
}

// {
//   let str = "";
//    i++){
//         str.push(katzDeliLine.length[i]);
//     if(katzDeliLine.length === [i+1]){
//       return `The line is currently ${katzDeliLine.length === 0}.`;
//     }
//   }
// }


