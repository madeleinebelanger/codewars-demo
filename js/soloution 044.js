function  calculateAge(yearOfBirth,howOldIsHe) {
let hisAge= howOldIsHe-yearOfBirth

if (hisAge==1){
    return `You are ${hisAge} year old`}
if(hisAge==-1){
    return `You will be born in ${Math.abs(hisAge)} year.`}
if(hisAge>0){
    return `You are ${hisAge} years old`}
if(hisAge<0){
    return `You will be born in ${Math.abs(hisAge)} years.`}
else{
    return `You were born this very year!`}

}
 
