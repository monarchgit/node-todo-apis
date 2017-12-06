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
//    db.collection('Todos').deleteMany({text:'eat lunch' }).then((result) =>{
//       console.log(result); 
//    });
    
    //deleteOne
//    db.collection('Todos').deleteOne({text:'Walk the dog' }).then((result) =>{
//       console.log(result); 
//    });    
    //findOneandDelete
    db.collection('Todos').findOneAndDelete({completed:true}).then((result) =>{
       console.log(result); 
    });   
    
    
    
    
    
//    db.close();
});