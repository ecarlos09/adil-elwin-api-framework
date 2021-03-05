const app = require('./app');

const port = 3000;

app.listen(port, () => {
    console.log(`Our Hamilton Cohort website website can be found at local port ${port}.`);
});