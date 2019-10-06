import chai from 'chai';
import chaiHttp from 'chai-http';
import 'mocha';
import app from '../app';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('JSON Patch', () => {
    it('Should return the resulting thumbnail', done => {
        chai.request(app)
            .post('/api/v1/login') // Login user
            .send({ username: 'kimpatrick', password: 'password' })
            .end((err, res) => {
                if (err) done();
                chai.request(app)
                    .post('/api/v1/thumb/nail')
                    .set('x-access-token', res.body.token)
                    .send({
                        url: 'http://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
                    })
                    .end((error, response) => {
                        if (error) done();
                        response.should.have.status(200);
                        response.body.should.be.a('object');
                        response.body.should.have.property('thumbnail');
                        response.body.should.have.property('status');
                        done();
                    });
            });
    });

    it('should return an error if URL is missing', done => {
        chai.request(app)
            .post('/api/v1/login') // Login user
            .send({ username: 'kimpatrick', password: 'password' })
            .end((err, res) => {
                if (err) done();
                chai.request(app)
                    .post('/api/v1/thumb/nail')
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

    it('Should return 500 if image fails to be resized', done => {
        chai.request(app)
            .post('/api/v1/login') // Login user
            .send({ username: 'kimpatrick', password: 'password' })
            .end((err, res) => {
                if (err) done();
                chai.request(app)
                    .post('/api/v1/thumb/nail')
                    .set('x-access-token', res.body.token)
                    .send({
                        url: 'http://eeee',
                    })
                    .end((error, response) => {
                        if (error) done();
                        response.should.have.status(500);
                        response.body.should.be.a('object');
                        response.body.should.have.property('status');
                        done();
                    });
            });
    });
});
