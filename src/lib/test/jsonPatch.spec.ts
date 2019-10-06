import chai from 'chai';
import chaiHttp from 'chai-http';
import 'mocha';
import app from '../app';

// Configure chai
chai.use(chaiHttp);
chai.should();
const loginUrl = '/api/v1/login';
const patchUrl = '/api/v1/patch';

describe('JSON Patch', () => {
    it('Should return a patched object', done => {
        chai.request(app)
            .post(loginUrl) // Login user
            .send({ username: 'kimpatrick', password: 'password' })
            .end((err, res) => {
                if (err) done();
                chai.request(app)
                    .post(patchUrl)
                    .set('x-access-token', res.body.token)
                    .send({
                        jsonObject: { baz: 'qux', foo: 'bar' },
                        patchObject: [{ op: 'replace', path: '/baz', value: 'boo' }],
                    })
                    .end((error, response) => {
                        if (error) done();
                        response.should.have.status(200);
                        response.body.should.be.a('object');
                        response.body.should.have.property('patcheddoc');
                        response.body.should.have.property('status');
                        done();
                    });
            });
    });

    it('should return an errors array if any required fields are missing', done => {
        chai.request(app)
            .post(loginUrl) // Login user
            .send({ username: 'kimpatrick', password: 'password' })
            .end((err, res) => {
                if (err) done();
                chai.request(app)
                    .post(patchUrl)
                    .set('x-access-token', res.body.token)
                    .send({})
                    .end((error, response) => {
                        if (error) done();
                        response.should.have.status(400);
                        response.body.should.be.a('array');
                        done();
                    });
            });
    });

    it('should return an 400 when patch operation fails', done => {
        chai.request(app)
            .post(loginUrl) // Login user
            .send({ username: 'kimpatrick', password: 'password' })
            .end((err, res) => {
                if (err) done();
                chai.request(app)
                    .post(patchUrl)
                    .set('Authorization', res.body.token)
                    .send({
                        jsonObject: { baz: 'qux', foo: 'bar' },
                        patchObject: [{ op: 'replace' }],
                    })
                    .end((error, response) => {
                        if (error) done();
                        response.should.have.status(400);
                        response.body.should.be.a('object');
                        done();
                    });
            });
    });

    it('should return 401 when token is not provided', done => {
        chai.request(app)
            .post(patchUrl)
            .set('Authorization', '')
            .send({
                jsonObject: { baz: 'qux', foo: 'bar' },
                patchObject: [{ op: 'replace', path: '/baz', value: 'boo' }],
            })
            .end((error, response) => {
                if (error) done();
                response.should.have.status(401);
                response.body.should.be.a('object');
                response.body.should.have.property('message');
                response.body.should.have.property('status');
                done();
            });
    });

    it('should return 401 when token is not valid', done => {
        chai.request(app)
            .post(patchUrl)
            .set('Authorization', 'token')
            .send({
                jsonObject: { baz: 'qux', foo: 'bar' },
                patchObject: [{ op: 'replace', path: '/baz', value: 'boo' }],
            })
            .end((error, response) => {
                if (error) done();
                response.should.have.status(401);
                response.body.should.be.a('object');
                response.body.should.have.property('message');
                response.body.should.have.property('status');
                done();
            });
    });
});
