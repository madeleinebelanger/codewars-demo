function openOrSenior(data){
let emptyArr=[]
let test= data.map(member=> (member[0]>54)&& (member[1]>7) )

for(let i=0; i<data.length;i++){
    if(test[i]==true){emptyArr.push( "Senior")}
    else {emptyArr.push( "Open")}}
 
return emptyArr
}




console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])) 
