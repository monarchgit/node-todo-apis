//const MongoClient = require('mongodb').MongoClient;
//same as above.
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if (err) {
        //instead of else to return
        return console.log ('unable to connect to mongodb server');
    }
    console.log('connected to mongo db');

    // find array whcih returns a promise
//    db.collection('Todos').find({completed:false}).toArray().then((docs) => {
//    console.log('todos');
//    console.log(JSON.stringify(docs,undefined,2));
//    } , (err) => {
//        console.log('unable to fetch todos',err);
//    });
//    db.collection('Todos').find().count().then((count) => {
//    console.log('todos');
//    console.log(`todos count: ${count}`);
//    } , (err) => {
//        console.log('unable to fetch todos',err);
//    });

//        db.collection('todos').find().count().then((count) => {
//    console.log('todos');
//    console.log(`todos count: ${count}`);
//    } , (err) => {
//        console.log('unable to fetch todos',err);
//    });

    db.collection('Users').find({name: 'bob'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
    } , (err) => {
        console.log('unable to fetch users',err);
    });
    db.collection('Users').find({name: 'bob'}).count().then((count) => {
    console.log('users');
    console.log(`users count: ${count}`);
    } , (err) => {
        console.log('unable to fetch users',err);
    });
                                                 
       
//    db.close();
});