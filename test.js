const { sum, fromYenToPound,fromEuroToDollar,fromDollarToYen } = require('./app.js');
test("One euro should be 1.07 dollars", function() {

    const { fromEuroToDollar } = require('./app.js');

    
    const dollars = fromEuroToDollar(3.5);

    
    const expected = 3.5 * 1.07; 
    
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("One Dollar should be 146.2616 yens", function() {

    const { fromDollarToYen } = require('./app.js');

    
    const dollars = fromDollarToYen(3.5);

    
    const expected = 3.5 * 146.2616; 
    
     expect(fromDollarToYen(3.5)).toBe(511.91588785046724); 
})
test("One yen should be 0.00555910543 pounds", function() {

    const { fromYenToPound } = require('./app.js');

    
    const pounds = fromDollarToYen(3.5);

    
    const expected = 3.5 * 0.00555910543; 
    
     expect(fromYenToPound(3.5)).toBe(0.019456869009584665); 
})