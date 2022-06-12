function friend(friends){
let answer= friends.filter(friend=> friend.length===4)
return answer


}

console.log(friend(["Ryan", "Kieran", "Mark"]))