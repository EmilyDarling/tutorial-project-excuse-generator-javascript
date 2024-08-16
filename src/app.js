let who = [
  "The dog",
  "My grandma",
  "The mailman",
  "My bird",
  "My mom",
  "A priest",
  "The President",
  "An alien",
  "A skeleton",
  "A caveman"
];

let action = [
  "ate",
  "peed on",
  "crushed",
  "broke",
  "disintegrated",
  "engulfed",
  "broke up with",
  "cremated",
  "snorted",
  "murdered",
  "fell in love with"
];

let what = [
  "my homework",
  "my phone",
  "the car",
  "a pigeon",
  "a footlong sandwich",
  "an orchestra"
];

let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was gaming",
  "while I was in the bathroom",
  "when I was showering",
  "during my ME time",
  "on such a beautiful afternoon",
  "while we were folding clothes"
];

function random_num(max) {
  return Math.floor(Math.random() * max);
}
function generate_excuse() {
  let newExcuse =
    who[random_num(who.length)] +
    " " +
    action[random_num(action.length)] +
    " " +
    what[random_num(what.length)] +
    " " +
    when[random_num(when.length)] +
    "!";
  //document.querrySelector("#excuse").innerHTML = newExcuse;
  console.log(newExcuse);
}
window.onload = () => {
  console.log("test");
};
