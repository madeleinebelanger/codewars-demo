function twoOldestAges(ages){
ages=ages.sort((a,b)=>b-a)
return ages.splice(0,2).reverse()




}


console.log(twoOldestAges([1, 2, 10, 8]))