const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const mongoose = require('mongoose');

const server = express()

// connect to mongodb from mlab
mongoose.connect('mongodb://mamun:asdfghjkl123@ds115283.mlab.com:15283/gql-react-playlist');
mongoose.connection.once('open', ()=> {
    console.log('connected to database..!');
})


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
