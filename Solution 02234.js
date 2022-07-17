var number = function(busStops){
let totalPeopleOnBus= 0
let totalPeopleLeaveBus=0
for(let i= 0; i<busStops.length;i++){
totalPeopleOnBus+= busStops[i][0]
}
for(let i= 0; i<busStops.length;i++){
totalPeopleLeaveBus+= busStops[i][1]
}

return totalPeopleOnBus-totalPeopleLeaveBus >0? totalPeopleOnBus-totalPeopleLeaveBus:0

}


console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))