let findTheOldest = function(arrayOfPersons) {
  return  arrayOfPersons.reduce(function(accumulator, currentValue) {
    let accAge = computeAge(accumulator);
    let currAge = computeAge(currentValue);
    return (accAge < currAge) ? currentValue : accumulator;
  });
}

function computeAge(person) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const startYear = person.yearOfBirth;
  const endYear = person.hasOwnProperty('yearOfDeath') ? 
      person.yearOfDeath : 
      currentYear;
  return endYear - startYear;
}

module.exports = findTheOldest
