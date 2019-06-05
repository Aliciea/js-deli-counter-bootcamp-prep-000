function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine) {
  for(let i = 0; i < katzDeliLine.length; i++){
    if(katzDeliLine.length === 0){
      return "There is nobody waiting to be served!"
    } else {
      return `Currently serving ${katzDeliLine.shift()}.`;
    }
  }
}
function currentLine(katzDeliLine) {
  let arr = [];
  for(let i = 0; i < katzDeliLine.length; i++){
        arr.push(` `+[i+1]+`. `  + katzDeli[i]);
    if(katzDeliLine.length === 0){
      return "The line is currently empty."
    }
  }
}



{
//   if('katzDeliLine' === ["Ada", "Grace"]){
//     return "The line is currently: 1. Ada, 2. Grace";
//   } else if('katzDeliLine === 0'){
//     return "The line is currently empty."
//   }
// }
