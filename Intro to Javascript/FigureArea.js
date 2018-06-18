function figureArea(w,h,W,H){
    let result=0;
    let firstArea=Number(w)*Number(h);
    let secondArea=Number(W)*Number(H);
    result=firstArea+secondArea-(Math.min(w,W)*Math.min(h,H));
    console.log(result);
}
figureArea(2, 4, 5, 3);