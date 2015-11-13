var expect = require('chai').expect;
var request = require('superagent');

var url = 'http://localhost:3000',
    pathResource = url + '/resources';


describe('Request to base url', function () {

    it('should return index page', function (done) {
        request.get(url).end(function (err, res) {
            expect(res.status).to.be.equal(200);
            done();
        });
    });

});

describe('Request to /tasks resource', function () {
    var pathTasksResource = pathResource + '/tasks';
    var id = null;

    it('should create the new Task if POST method is used', function (done) {
        request.post(pathTasksResource)
            .set('Content-Type', 'application/json').send({name: "tj"}).end(function (err, res) {
                expect(res.status).to.be.equal(201);
                done();
            });
    })

    it('should return the Task by provided id if GET method is used', function (done) {
        request.get(pathTasksResource + '/' + id).end(function (err, res) {
            //expect(res.status).to.be.equal(200); // todo: TBD
            done();
        });
    })


    it('should return all Tasks if GET method is used', function (done) {
        request.get(pathTasksResource).end(function (err, res) {
            expect(res.status).to.be.equal(200);
            done();
        });
    })




})
