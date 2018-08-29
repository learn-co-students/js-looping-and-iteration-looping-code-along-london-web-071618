// Code your solutions in this file
function printBadges(arr){
  for (let counter = 0; counter <=(arr.length -1); counter++){
        console.log(`Welcome ${arr[counter]}! You are employee #${counter + 1}.`);
  }
   return arr
}



  function tailsNeverFails(){
      let tail = 0
      let flip = () => Math.floor(Math.random()*2)
      while (flip() === 1){
      ++tail
 }
    return `You got ${tail} tails in a row!`
 }
