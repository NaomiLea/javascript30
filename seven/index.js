const people = [{
    name: 'Wes',
    year: 1988
}, {
    name: 'Kait',
    year: 1986
}, {
    name: 'Irv',
    year: 1970
}, {
    name: 'Lux',
    year: 2015
}];

const comments = [{
    text: 'Love this!',
    id: 523423
}, {
    text: 'Super good',
    id: 823423
}, {
    text: 'You are the best',
    id: 2039842
}, {
    text: 'Ramen is my fav food ever',
    id: 123523
}, {
    text: 'Nice Nice Nice!',
    id: 542328
}];

// const isAdult = people.some(function(person) {
//     const currentYear = (new Date()).getFullYear();
//     if (currentYear - person.year >= 19) {
//         return true;
//     }
// });
const currentYear = (new Date()).getFullYear();
const isAdult = people.some(person => {
  return currentYear - person.year >= 19;
});
console.log(isAdult);
const allAdults = people.every(person => {
  return currentYear - person.year >= 19;
});
console.log(allAdults);

const comment = comments.find(function(comment){
  if(comment.id === 823423){
    return true;
  }
});
console.log(comment);

const index = comments.findIndex(comment => comment.id === 823423);

comments.splice(index, 1);

const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index+1)
];