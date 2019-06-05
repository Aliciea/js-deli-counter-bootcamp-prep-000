function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine) {
  for(let i = 0; i < katzDeliLine.length; i++){
    if(katzDeliLine.length === 0){
      return `Currently serving ${katzDeliLine.shift()}.`;
    } else {
      return "There is nobody waiting to be served!"
      
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


