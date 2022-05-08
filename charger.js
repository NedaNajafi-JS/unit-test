process.env.NODE_ENV = 'test';

let mongoose = require('mongoose');

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('./../server');
let expect = chai.expect;

const chargerModel = require('./../models/store/Chargers');
const chargerLookupModel = require('./../models/store/cahrgersLookup');

chai.use(chaiHttp);

describe('Store Panel Chareger test', () => {

    it('should retrieve price, given productId and attribute list', (done) => {
        new chargerModel({
            name: 'شارژر تست',
            ENname: 'chargerTest',
            product_model: "Charger test",
            discount: "0"
        })
        .save((err, res) => {
            new chargerLookupModel({
                name: 'Charger test',
                product_id: res._id,
                models:[{
                    name: 'Charger test1', 
                    sapcode: '123456',
                    attrs:['attr1', 'attr2', 'attr3'],
                    price: 139
                }]
            })
            .save((err, res) => {

                let product = {
                    product_id: res.product_id,
                    attrs: [
                        {
                            value: 'attr2'
                        },
                        {
                            value: 'attr1'
                        },
                        {
                            value: 'attr3'
                        }
                    ]
                }

                chai.request(server)
                .post('/api/store/charger/retrievePrice')
                .send(product)
                .end((err, res) => {console.log(err, res.body)

                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('price');
                    res.body.should.have.property('afterdiscount');
                    expect(res.body.price).to.be.a('number');
                    expect(res.body.afterdiscount).to.be.a('number');

                })
            })
        });

        done();
    })
})