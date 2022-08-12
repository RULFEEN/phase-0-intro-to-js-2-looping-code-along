// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }*/
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
  
    return gifts;
}
  
wrapGifts(gifts);
*/
/*
const cards = ["Ada", "Brendan", "Ali"];
const birthday = "the wonderful birthday gift!"

function writeCards([cards], [birthday]) {
    for (let i = 0; i < cards.length; i++) {
        console.log(`Thank you, ${cards[i]}, for ${birthday}`);
        writtenCards = {...cards};
    }
    return writtenCards;
}
writeCards([cards], [birthday]);
*/

function countDown() {
    let int = 20;
    while (int >= 0) {
        console.log(`I am ${int}, a positive integer!`);
        int--;
    }
    return int;
}
countDown();