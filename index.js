

// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
    
    return drivers.filter (driver => driver.toLowerCase() == name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
    const newDrivers = drivers.filter(function (initial){
        return initial.slice(0,1) === name.slice(0,1);
    });
    return newDrivers;
}

function matchName(collection, name){
    return collection.filter(function (driver){

    return  driver.name.toLowerCase() == name.toLowerCase()
     });
    }
