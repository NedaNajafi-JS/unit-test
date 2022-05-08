// process.env.NODE_ENV = 'test';

// let mongoose = require('mongoose');
// let testModel = require('./../models/test');

// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let should = chai.should();
// let server = require('./../server');

// chai.use(chaiHttp);

// describe('/Get /Post test', () => {
//     beforeEach((done) => {
//         testModel.remove({}, (err) => {
//             done();
//         });
//     });

//     it('it should get all test records from DB', (done) => {
//         chai.request(server)
//         .get('/api/test')
//         .end((err, res) => {
//             res.should.have.status(200);
//             res.body.should.be.a('array');
//             res.body.length.should.be.eql(0);
//             done();
//         })
//     });

//     let testModel_ = {
//         name: "test2",
//         number: 1
//     }

//     it('it should save to test collection', (done) => {
//         chai.request(server)
//         .post('/api/test')
//         .send(testModel_)
//         .end((err, res) => {
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             res.body.should.have.property('test');
//             res.body.test.should.have.property('name');
//             res.body.test.should.have.property('number');

//             done();
//         })
//     }); 

//     it('should get a test with id', async(done) => {

//         let new_test = new testModel({
//             name:"test33333",
//             number: 5555
//         });

//         new_test.save((err, test) => {
//             chai.request(server)
//             .get('/api/test/' + test._id.toString())
//             .end((err, res) => {

//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.test.should.have.property('name');
//                 res.body.test.should.have.property('number');

//             })
//         });

//         done()
        
//     })

// });