const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const server = express()

const dev = process.env.NODE_ENV !== 'production';

server.use('/graphql', graphqlHTTP( {
    schema,
    graphiql: dev,
    pretty: dev
}));

server.listen(4000, err => {
    if(err) throw err;
    console.log('server runing on PORT ${PORT}');
})
