import chai from 'chai';
import chaiHttp from 'chai-http';
import 'mocha';
import app from '../app';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('User login', () => {
    it('should return token when user logins', done => {
        chai.request(app)
            .post('/api/v1/login')
            .send({ username: 'kimpatrick', password: 'password' })
            .end((error, response) => {
                if (error) done();
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('token');
                response.body.should.have.property('status');
                done();
            });
    });

    it('should return an error if required fields are missing', done => {
        chai.request(app)
            .post('/api/v1/login')
            .send({})
            .end((error, response) => {
                if (error) done();
                response.should.have.status(400);
                response.body.should.be.a('array');
                done();
            });
    });
});
