const { TestScheduler } = require('@jest/core');
const request = require('supertest');
//Import server
const app = require('../app')

describe('API server', () => {
    let api;

    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log('Test server is running on 5000');
        });
    });

    afterAll((done) => {
        console.log('Server stopped')
        api = app.close(done);
    });

    test('responds to get /  with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });

    it('responds to get /students with status 200', (done) => {
        request(api).get('/students').expect(200, done);
    });

    // it('responds to post /students with status 201', (done) => {
    //     request(api)
    //         .post('/students')
    //         .send(testStudent)
    //         .expect(201)
    //         .expect({ id: 3, ...testStudent }, done);
    // });

    // it('retrieves a student by id', (done) => {
    //     request(api)
    //         .get('/students/2')
    //         .expect(200)
    //         .expect({ ...}, done);
    // });
});
