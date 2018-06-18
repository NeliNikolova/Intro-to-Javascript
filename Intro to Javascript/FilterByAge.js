function filterByAge(minimumAge,firstName,firstAge,secondName,secondAge){
    if(firstAge>=minimumAge){
        console.log(`{ name: '${firstName}', age: ${firstAge} }`);
    }
    if(secondAge>=minimumAge){
        console.log(`{ name: '${secondName}', age: ${secondAge } }`);
    }
}
filterByAge(12, 'Ivan', 15, 'Asen', 9);