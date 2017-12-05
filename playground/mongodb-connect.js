//const MongoClient = require('mongodb').MongoClient;
//same as above.
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);

//var user = {name:'bob',age:25};
//example
//object destruturing in es6
//pull properties from an object creating variable
//var {name} = user;
//console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if (err) {
        //instead of else to return
        return console.log ('unable to connect to mongodb server');
    }
    console.log('connected to mongo db');
 /*   
    db.collection('Todos').insertOne({
        text:'Stuff',
        completed:false
    },(err, result) => {
       if (err) {
           return console.log('unable to insert tod',err);
       }
       console.log(JSON.stringify(result.ops,undefined,2));
    });
   */ 
    
  
//    db.collection('Users').insertOne({
//        name:'bob',
//        age:25,
//        location:'home'
//    },(err, result) => {
//       if (err) {
//           return console.log('unable to insert tod',err);
//       }
//       console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
//    });
       
    
    
    db.close();
});