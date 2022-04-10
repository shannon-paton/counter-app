



//_________________________NOTES_________________________

//1. Create a variable, myAge and set its value to your age
let myAge = 25;

//2. Log the myAge variable to the console
console.log(myAge)




let firstBatch = 5;
let secondBatch = 2;
let count = firstBatch + secondBatch;
console.log(count)

// 1. Create two variables, myAge and humanDogRatio (1 human year = 7 dog years)

let myAge = 25

let humanDogRatio = 7

// // 2. Multiply the two together and store teh result in myDogAge

let myDogAge = myAge * humanDogRatio

// 3. Log myDogAge to the console

console.log(myDogAge)




//let count = 5

// count + 1
// count = count + 1 OR count ++

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.

let bonusPoints = 50
bonusPoints = bonusPoints + 50
console.log(bonusPoints)


// Decrease it down to 25, and then finally increase it to 70

bonusPoints = bonusPoints - 75
console.log(bonusPoints)

bonusPoints = bonusPoints + 45
console.log(bonusPoints)




function countdown() {
     console.log(5)
     console.log(4)
     console.log(3)
     console.log(2)
     console.log(1)
 }

// Setting up the race
 console.log("first race")
 countdown() // calling the function

 // GO!
 // Players are running the race
 // Race is finished!

 // Get ready for a new race
console.log("second race")
countdown()

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

function print42(){
     console.log(42)
}

print42()


let lap1 = 34
let lap2 = 33
let lap3 = 36

//Create a function that logs out the sum of all the lap times

function logLapTime() {
     let totalTime = lap1 + lap2 + lap3 // this is now defined in the inner scope
     console.log(totalTime)
     //console.log(lap1+lap2+lap3)
}

logLapTime()

// logLapTime(totalTime) not defined in the global scope so this doesn't work






// let lapsCompleted = 0

// // Create a function that increments the lapsCompleted variable with one every time you run the function
// // Run it three times

// function lapIncrement() {
//     lapsCompleted ++ //or lapsCompleted = lapsCompleted + 1
// }

// lapIncrement()
// lapIncrement()
// lapIncrement()

// console.log(lapsCompleted)




// //document.getElementById("count-el").innerText = 5

// // initialize the count as 0

// // camelCase for JavaScript variables
// let countEl = document.getElementById("count-el") //JavaScript representation of HTML element count-el

// let count = 0

// // listen for clicks on increment button
// function increment() {
//     // increment the count variable when the button is clicked
//     count++ // count = count + 1
//     console.log(count)
//     // change the count-el in the HTML in the HTML to reflect the new count
//     //document.getElementById('count-el').innerHTML = count -- way I originally did it
//     countEl.innerHTML = count // -- second way I did it 
// }

// Document Object Model (aka how you use JavaScript to modify a website)



// STRINGS
let username = "per"
let message = "You have three new notifications"

let messageToUser = message + ", " + username + "!"

console.log(messageToUser)

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting variable should store e.g. "Hi, my name is"

let name = 42
let greeting = "Hi, I'm "

myGreeting = greeting + name
console.log(myGreeting)

let points = 4
let bonusPoints = "10"

let totalPoints = points + bonusPoints

console.log(totalPoints) // makes the result "410" (a string)

console.log(4 + 5 + " is 9")
console.log("2" + "4" + " is 24")
console.log("5" + 1 + " is 51")
console.log(100 + "100" + " is 100100")
console.log(100 + 100 + " is 200")

// creating save Previous entries:

let countEl = document.getElementById("count-el")
// 1. Grab the save-el paragraph and store it in a variable called saveEl
saveEl = document.getElementById("save-el")

let count = 0
function increment() {
    count += 1
    console.log(count)
    countEl.innerHTML = count
}



function save() {
    // 1. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    countSave = count + " - "
    
    // 2. Render the variable in the saveEl using the innerText
    saveEl.textContent += countSave // also innerHTML seems to do the same things?
    
    // NB: Make sure not to delete the existing content of the paragraph
    console.log(count)
}


// set number back to zero after being saved


function save() {
    countSave = count + " - "
    saveEl.textContent += countSave
    console.log(count)
    count = 0 // set count back to 0
    countEl.innerText = 0 // set counter text on screen back to 0
}



