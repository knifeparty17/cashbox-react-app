const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const path = require('path')
const port = process.env.PORT || 5000
const clientPath = path.join(__dirname, 'client')
const mongoUrl = 'mongodb+srv://knifeparty:password@cash-app-cluster-rbix1.gcp.mongodb.net/test?retryWrites=true';


const app = express()

app.use(express.static(clientPath))

 app.get('/', function (req, res)
 {
   MongoClient.connect(mongoUrl, {useNewUrlParser: true} ,function(err, client) {
   client.db("test").collection("goods").find({}).toArray(function(err, goods){
            res.send(goods);            
            client.close();
   });
});

 });
app.listen(port,()=>{
	console.log(`Server run on ${port} port`)
})
