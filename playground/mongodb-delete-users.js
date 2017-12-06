//const MongoClient = require('mongodb').MongoClient;
//same as above.
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if (err) {
        //instead of else to return
        return console.log ('unable to connect to mongodb server');
    }
    console.log('connected to mongo db');

    //deleteMany
    db.collection('Users').deleteMany({name:'bob' }).then((result) =>{
       console.log(result); 
    });
    
    //deleteOne
//    db.collection('Todos').deleteOne({text:'Walk the dog' }).then((result) =>{
//       console.log(result); 
//    });    
    //findOneandDelete
    db.collection('Users').findOneAndDelete({_id : new ObjectID("5a147ceb33671d14355df229")}).then((result) =>{
       console.log(result); 
    });   
    
    
    
    
    
//    db.close();
});