function getDrinkByProfession(param){
let expr= param.toUpperCase('')
switch (expr){
    case "JABRONI":
    return "Patron Tequila";
    break
     case "SCHOOL COUNSELOR":
    return "Anything with Alcohol";
    break
     case "PROGRAMMER":
    return "Hipster Craft Beer";
    break
    case "BIKE GANG MEMBER":
    return "Moonshine";
    break
    case "POLITICIAN":
    return "Your tax dollars";
    break
    case "RAPPER":
    return "Cristal";
    break
    default:
    return "Beer";

}

}

console.log(getDrinkByProfession("scHOOl counselor"))

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"