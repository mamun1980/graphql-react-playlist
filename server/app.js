const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const server = express()

const dev = process.env.NODE_ENV !== 'production';

server.use('/graphql', graphqlHTTP((req, res, gql) => {
    schema
}));

server.listen(4000, err => {
    if(err) throw err;
    console.log('server runing on PORT ${PORT}');
})
