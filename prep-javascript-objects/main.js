const person = {
  firstName: 'Katelyn',
  lastName: 'Ngo',
  hobby: 'petting dogs',
};
console.log(person);

const fullName = 'Katelyn' + ' Ngo.';
console.log("The person's name is:", fullName);

person.job = 'work with kids.';
console.log("The person's current job is:", person.job);

person['previousJob'] = 'working in restaurant.';
console.log("The person's previous job is:", person['previousJob']);

console.log('The complete person object:', person);
