const { TestWatcher } = require("jest");
const { sum } = require("./app.js");


// First test
test("adds 14 + 9 to equal 23", () => {
    let total = sum(14,9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test("One dollar should be 106.58 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromDollarToYen(1)

    
    const expected = 1 * 127.9 / 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); 
})

test("One yen should be 6.3E-3 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromYenToPound(1)

    
    const expected = 1 * 0.8 / 127.9; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); 
})