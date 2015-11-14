var expect = require('chai').expect;
var mongoose = require('mongoose');
var Task = require('../models/Task')

mongoose.connect('mongodb://localhost/reminder_test');


describe('Task', function () {
    before('clear db', function () {
        Task.remove({});
    });


    describe('#create()', function () {
        it('should create the new task', function () {
            Task.create(new Task({name: 'test name'}), function (err, result) {
                expect(err).to.be.a('null');
                expect(result).not.to.be.null;
            });
        });
    });

    describe('#find()', function () {
        it('should return the list of tasks', function () {
            Task.find({}, function (err, result) {
                expect(err).to.be.a('null');
                expect(result).to.have.length(1);
                expect(result[0].name).to.equal('test name');
            });
        });
    });
});
