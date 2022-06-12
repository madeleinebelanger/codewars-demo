function sortByLength (array) {
let sorted= array.sort((a,b)=> a.length-b.length)
sorted
return sorted

};

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))