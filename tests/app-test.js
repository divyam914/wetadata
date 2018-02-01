const chai = require('chai');
const expect = chai.expect; 
const rev = require('../app.js');


// run a test file by
			// mocha app-test.js


//  describe('app', function() {
// 	describe('') enter the function name that we're going to test
// }

	// ex. for a repeat function
    // describe('repeat', function() {
    //     it('creates an array by repeating value, ele, n times', function() {
    //         const arr = rev.repeat("hello", 3);
    //         const expected = ["hello", "hello", "hello"];
    //         expect(arr).to.deep.equal(expected);
    //     });
    // });
    // other 'equal' methods other than to.deep.equal, which is for arrays
    // .to.equal = for a single number
    // .to.be.undefined
    // .to.be.true
    // .to.be.false
    // stack overflow the rest i guess

    //ex. successful output
    // reversi
    //   repeat
    //     ✓ creates an array by repeating value, ele, n times

    //ex. unsuccessful output
    // AssertionError: expected 'X' to equal 'O'
    // + expected - actual

    // -X
    // +O
    
    // at Context.<anonymous> (reversi-test.js:187:33)

