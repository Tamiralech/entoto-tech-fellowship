for(var num = 1; num <=100; num++){
   if(num % 5 == 0 && num % 3 == 0){
    console.log(num +" "+"FizzBizz")
  }
 else if(num % 3 == 0){
    console.log(num +" "+"Fizz")
  } 
  else if(num % 5 == 0){
    console.log(num +" "+"Bizz")
  }
    
  else
      console.log(num +" "+ "it is not divisible by 3 and 5")
  
  
}