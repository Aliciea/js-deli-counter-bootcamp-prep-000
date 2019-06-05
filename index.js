function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine) {
  for(let i = 0; i < katzDeliLine.length; i++){
    if(katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
    } else {
      return `Currently serving ${katzDeliLine.shift()}.`;
    }
  }
}
function currentLine(katzDeliLine) {
  let str = "";
  for(let i = 0; i < katzDeliLine.length; i++){
        str.push(katzDeliLine.length[i]);
    if(katzDeliLine.length === [i+1]){
      return `The line is currently ${katzDeliLine.length === 0}.`;
    }
  }
}



// {
//   if('katzDeliLine' === ["Ada", "Grace"]){
//     return "The line is currently: 1. Ada, 2. Grace";
//   } else if('katzDeliLine === 0'){
//     return "The line is currently empty."
//   }
// }
