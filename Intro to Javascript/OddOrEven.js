function findOddOrEven(number){
    let num=Math.abs(number);
    if(num%2==0){
        console.log("even");

    }
   else if(num%2==1){
        console.log("odd");

    }
    else{
       console.log("invalid");
    }
}
findOddOrEven(1.5);