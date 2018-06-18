function letterInString(word,letter){
    let count=0;

    for(let i=0; i<word.length; i++) {

       if(letter==word[i]){
           count++;
       }

    }
    console.log(count);
}
letterInString('hello', 'l');