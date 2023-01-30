function milesToKm(miles){
    const kilometer = miles * 1.60;
    return kilometer;
}

const totalMiles = 24;
const convert = milesToKm(totalMiles);
console.log('Total KM: ', convert);