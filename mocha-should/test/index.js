'use strict';
require('should');
const mylib = require('../index');

describe('My First Test', () => {
    it('should get "Hello Tmall"', () => {
        mylib().should.be.eql('Hello Tmall');
    });
});