//const MongoClient = require('mongodb').MongoClient;
//same as above.
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if (err) {
        //instead of else to return
        return console.log ('unable to connect to mongodb server');
    }
    console.log('connected to mongo db');

    db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID("5a282af249959ba3a05ade19")},
                                            {$set :{
        completed: false
    }
        
    },{
        returnOriginal :false
    }
                                           ).then((result) =>{
       console.log(result); 
    });   
    
    
    
    
    
//    db.close();
});