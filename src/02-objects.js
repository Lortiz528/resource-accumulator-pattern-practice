/**
 * Return an array of every object's name.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {string[]} - An array of names.
 */
function getAllNames(people) {
  let newArray = [];
  for(let person of people){
    newArray.push(person.name)
  }
  return newArray
}

/**
 * Given an array of people objects, return the single object with a name that matches the given name (case-insensitive). If no name matches, return `null`
 *
 * @param {Object[]} people - An array of people objects.
 * @param {string} name - A single name.
 * @returns {Object|null} - A person object or `null`.
 */
function findPersonByName(people, name) {
  let result = null;
  for (let person of people){
    if (person.name.toLowerCase() === name.toLowerCase()){
      result = person
    }
  }
  return result
}

/**
 * Return an array of objects, where each object represents a person under the age of 25.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleUnder25(people) {
  let newArray = [];
  for(let person of people){
    if (person.age < 25){
      newArray.push(person)
    }
  }
  return newArray
}

/**
 * Return an array of objects, where each object represents a person with a `gmail.com` email address.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleWithGmail(people) {
let newArray = [];
  for(let person of people){
    if (person['email'].includes('gmail.com')){
      newArray.push(person)
    }
  }
  return newArray
}

module.exports = {
  getAllNames,
  findPersonByName,
  getPeopleUnder25,
  getPeopleWithGmail,
};
