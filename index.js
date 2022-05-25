// Code your solution here
function findMatching(arrOfDrivers, name){
    return arrOfDrivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}



function fuzzyMatch(arrOfDrivers, name){
    return arrOfDrivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()))
}



function matchName (arrOfDriversObs, name){
    return arrOfDriversObs.filter(driver => driver.name.toLowerCase() === name.toLowerCase())
}