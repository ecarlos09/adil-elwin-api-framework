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

    afterAll(() => {
        console.log('Server stopped')
        api = app.close(done);
    });
});
