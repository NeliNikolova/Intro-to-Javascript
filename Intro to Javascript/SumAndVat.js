function sumAndVat(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++) {

     sum += Number(arr[i]);
    }
    let vat=(sum)*20/100;
    let result=sum +vat;

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`result = ${result}`);
}
sumAndVat(1.20,2.6,3.5)