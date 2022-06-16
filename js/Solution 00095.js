function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
let newArr= [age1,age2,age3,age4,age5,age6,age7,age8]
let newArr2=[]
for(let i=0; i<newArr.length;i++)
{newArr2.push(newArr[i]*newArr[i])}
let totalAges= newArr2.reduce((a,b)=>a+b)
return Math.floor(Math.sqrt(totalAges)/2)

}


console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))