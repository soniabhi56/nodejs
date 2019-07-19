// var assert = require('assert');
// describe('Array', function () {
//     // describe('#indexOf()', function () {
//     //     it('should return -1 when the value is not present', function () {
//     //         assert.equal([1, 2, 3].indexOf(4), -1);
//     //     });


//     // });

//     it('double done', function (done) {
//         // Calling `done()` twice is an error
//         setImmediate(done);
//         //setImmediate(done);
//     });
// });

var request = require('supertest');
var expect = require('chai').expect;

var server = request.agent('http://localhost:3000');


describe('GET /notes', function () {
    it('responds with json', function (done) {
        server
            .get('/notes')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
    });
});