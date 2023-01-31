function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const myNumberIsEven = isEven(33);
console.log(myNumberIsEven);
const moreNumberIsEven = isEven(1280);
console.log(moreNumberIsEven);