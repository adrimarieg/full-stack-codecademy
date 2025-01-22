const supportiveFortunes = ["Even the smallest decision has a big impact.", "Tomorrow may be a new day, but today is equally important.", "Recovery requires as much attention as it's counterpart."];
const badFortunes = ["You will face a difficult challenge when you least expect to.", "Karma is real, be weary of your actions", "It's time to step up to the challenge and work hard."];
const goodFortunes = ["The win you've been waiting for is almost here.", "All your hard work will come to fuition.", "You are not alone."];

const getRandomFortune = () => {
    //create an array of all arrays to select a random type
    const allArrays = [supportiveFortunes, badFortunes, goodFortunes];

    //select random array
    const randomArray = allArrays[Math.floor(Math.random() * allArrays.length)]

    //select random message from selected array
    const randomMessage = randomArray[Math.floor(Math.random() * randomArray.length)];

    return randomMessage;
}

console.log(getRandomFortune());
