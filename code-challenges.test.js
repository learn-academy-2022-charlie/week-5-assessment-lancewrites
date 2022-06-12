// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.
describe("l33tWord", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        expect(l33tWord(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(l33tWord(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(l33tWord(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

                // FAIL  ./code-challenges.test.js
                // l33tWord
                //   ✕ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (2 ms)
                //   ReferenceError: l33tWord is not defined

// b) Create the function that makes the test pass.

//Input is a string
    //Create a function called l33tWord that takes in a string as an argument for the parameter
    //using regex return
        //for every instance of A replace it with '4'
        //for every instance of E replace it with '3'
        //for every instance of I replace it with '1'
        //for every instance of O replace it with '0'
    
    

    function l33tWord(string){
        return string.replace(/a/gi, '4').replace(/e/gi, '3').replace(/i/gi, '1').replace(/o/gi, '0')}

                //   PASS  ./code-challenges.test.js
                //   l33tWord
                //     ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (2 ms)
// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("specLetter", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
        expect(specLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(specLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
                // FAIL  ./code-challenges.test.js
                // ● specLetter › takes in an array of words and a single letter and returns all the words that contain that particular letter.

                //     ReferenceError: specLetter is not defined

// b) Create the function that makes the test pass.

//Create a function called specLetter that takes in two parameters: an array of words and a letter
//Map through the array and filter out the word in the given array that contains the letter passed as an argument.
const specLetter = (array, letter) => {
    let regLetter = new RegExp(letter, 'i')
    return array.filter(word => word.match(regLetter))
}
        
                // PASS  ./code-challenges.test.js
                // l33tWord
                //   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (2 ms)
                // specLetter
                //   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter. (1 ms)


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })    
})

            // FAIL  ./code-challenges.test.js
            // fullHouse
            // ✕ takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

            // ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

            // ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.
//Create a function called fullHouse that takes in an array of numbers
    //create a variable called sorted that sorts the input array from least to greatest
    //iterate through the sorted array
        //if value at the zeroth and the first index are equal AND the values of the rest of the indexes multiplied together equal the cube of the value at the second index
                        //OR
        //the values at the last two indexes are equal and the product (term to describe multiplication) of the previous three indexes are equal to the cube of the zeroth index
        //RETURN TRUE

    //Otherwise return false
const fullHouse = (arr) => {
    let sorted = arr.sort((a, b) => a - b)
      for(let i=0; i<sorted.length; i++){
        if((arr[0]===arr[1] && arr[2]*arr[3]*arr[4]===arr[2]**3) || (arr[3]===arr[4] && arr[0]*arr[1]*arr[2]===arr[0]**3)){
          return true
        } else{
          return false
        }
      }
  
  }
//It's ugly but it works. May refactor, already spent 3 hours on it, though.
            //   PASS  ./code-challenges.test.js
            //   l33tWord
            //     ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (3 ms)
            //   specLetter
            //     ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter. (1 ms)
            //   fullHouse
            //     ✓ takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind. (1 ms)