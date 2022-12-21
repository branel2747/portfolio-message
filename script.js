const options = {
    today: ["to be a sunny day", "rain", "be a regular day", "be a exciting day"],
    stay:["good news comming", "a friend could betray you","you are in danger"],
    you: ["hug your parents","eat a lot", "be brave" , "thing about what you're doing"]
}
const proper = Object.getOwnPropertyNames(options);
const randomizer = (propertie) => {
    const m = Math.floor(Math.random() * (propertie.length));
    return m
}
const mens = proper[randomizer(proper)]
const complete = options[mens][randomizer(options[mens])]

switch (mens) {
    case 'today':
      console.log(`Today is going to ${complete}`);
      break;
    case 'stay':
        console.log(`Stay alert ${complete}`)
        break;
    case 'you':
      console.log(`You must ${complete}`);
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
      break;
  }