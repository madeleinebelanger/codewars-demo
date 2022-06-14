function isLockNessMonster(s) {
let test= s.includes("tree fiddy")
let test2= s.includes("3.50")
let test3= s.includes("three fifty")

if(test==true || test2==true || test3 ==true){
return true
}

else{
return false
}


}

console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to three fifty"))