function findVolumeSurface(r,h){
   let volume= (1/3)*Math.PI*r*r*h;
    let surface=Math.PI*r*(r + Math.sqrt(r*r + h*h));
    console.log(`volume = ${volume}`);
    console.log(`area = ${surface}`);
}
findVolumeSurface(3.3,7.8);