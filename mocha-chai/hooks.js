var expect = require('chai').expect;

console.log('hooks 生命周期')

describe('2: describe 描述1 \n', function () {
    before(function () {
        // runs before all tests in this block
        console.log('3: hooks before in describe 描述1  \n')
    });

    after(function () {
        // runs after all tests in this block
        console.log('9:hooks after in describe 描述1  \n')
    });

    beforeEach(function () {
        // runs before each test in this block
        console.log('5:### hooks beforeEach in describe 描述1 ###  \n')
    });

    afterEach(function () {
        // runs after each test in this block
        console.log('7:### hooks afterEach in describe 描述1 ### \n')
    });



    // test cases
    it("test cases 1 : everthing 值为真", () => {
        expect('everthing').to.be.ok;
    });

    it("test cases 2: everthing 值为真", () => {
        expect('everthing').to.be.ok;
    });

});


before(function () {
    // runs before all tests in this block
    console.log('1: hooks before out  \n')
});

after(function () {
    // runs after all tests in this block
    console.log('10:hooks after out \n')
});

beforeEach(function () {
    // runs before each test in this block
    console.log('4: ***hooks beforeEach out *** \n\n')
});

afterEach(function () {
    // runs after each test in this block
    console.log('8: *** hooks afterEach out *** \n\n')
});
