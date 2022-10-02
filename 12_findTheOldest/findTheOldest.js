const findTheOldest = function(people) {
    const today = new Date()
        people.map(person => {
        if(!person.yearOfDeath) {
        person['yearsAlive'] = today.getFullYear() - person.yearOfBirth
        }else {
        person['yearsAlive'] = person.yearOfDeath - person.yearOfBirth
        }
        })
    
    let oldestAge = people[0].yearsAlive
    let index = 0
    for(let i = 0;i < people.length;i++) {
        if(people[i].yearsAlive > oldestAge) {
        oldestAge = people[i].yearsAlive
        index = i
        }
    }
    const oldestPerson = people[index]
    return oldestPerson
    }

// Do not edit below this line
module.exports = findTheOldest;
