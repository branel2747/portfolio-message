const options = {
    today: ["to be a sunny day", "rain", "be a regular day", "be a exciting day"],
    stay:["good news comming", "a frien could betray you","you are in danger"],
    you: ["hug your parents","eat a lot", "be brave" , "thing about what you're doing"]
}
const proper = Object.getOwnPropertyNames(options);
const randomizer = (propertie) => {
    const m = Math.floor(Math.random() * (propertie.length));
    return m
}
const mens = proper[randomizer(proper)]
console.log(options[mens][randomizer(options[mens])])
