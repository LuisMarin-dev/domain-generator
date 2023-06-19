// let pronoun = ['the','our'];
// let adj = ['great', 'big' ];
// let noun = ['jogger','racoon'];

//cosnt allArrays = [pronoun, adj, noun]

// function generateDomainName() {
//aaaaaaa
// }

// function getRandomItem(array){
//   random = Math.floor(Math.random()*array.length);
//   return random;
// }

// console.log(pronoun[getRandomItem(pronoun)])

const pronoun = ['the','our'];
const adj = ['great', 'big'];
const noun = ['jogger','racoon'];


for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let c = 0; c < noun.length; c++) {
      console.log(pronoun[a] + adj[b] + noun[c] + ".com");
   }
  }
 }