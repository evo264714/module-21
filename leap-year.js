// function isLeapYear(year){
//     const remainder = year % 4;
//     if (remainder === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
function isLeapYear(year){
    const remainder = year % 4;
    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const isMyYearLeapYear = isLeapYear(1993);
console.log('my year ', isMyYearLeapYear);

const isHisYearLeapYear = isLeapYear(1992);
console.log('his year ', isHisYearLeapYear);

