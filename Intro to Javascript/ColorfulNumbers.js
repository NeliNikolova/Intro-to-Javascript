function print(num){
    let html="<ul>\n";
    for(let i=1; i<=num; i++){
        if(i%2===0){
            html+=`<li><span style='color:blue'>${i}</span></li>\n`;

        }
        else{
            html+=`<li><span style='color:green'>${i}</span></li>\n`;
        }

    }
    html+="</ul>\n";
    return html;
}

console.log(print("10"));