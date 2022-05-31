function alphabetWar(fight){
let leftSide=[]
let rightSide=[]
fight=fight.split('')


for(let i=0; i<fight.length; i++){
console.log(fight[i])
}
 

for(let i=0; i<fight.length; i++){
if( fight[i]==='m') { rightSide.push(4)}
else if ( fight[i]==='q') { rightSide.push( 3)}
else if ( fight[i]==='d') { rightSide.push( 2)}
else if ( fight[i]==='z') { rightSide.push( 1)}
}

let leftSideTotal = leftSide.reduce((a,b)=> a+b,0)
let rightSideTotal = rightSide.reduce((a,b)=> a+b,0)
rightSide
leftSide
rightSideTotal
leftSideTotal
if(leftSideTotal>rightSideTotal){
    return "Left side wins!"}

else if (leftSideTotal<rightSideTotal){
    return "Right side wins!"}

else if(leftSide=rightSide){
    return 'Let\'s fight again!'}
}


console.log(alphabetWar("lwopsvfjdjzdrm"))

 
