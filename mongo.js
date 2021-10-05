const { MongoClient } = require("mongodb");

const MONGODB_URL = "mongodb+srv://joyce:admin%40123@cluster0.fqwyn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const MONGODB_NAME = "stack_overflow";
//MongoClient is a class given by mongodb
const client = new MongoClient(MONGODB_URL);


module.exports = {
    //complete connection
    db: null,

    //specific collections
    posts:null,
    users:null,

    async connect() {
        //connction to database
        await client.connect();
        console.log("connect to mongo");
        //selecting database
        this.db = client.db(MONGODB_NAME);
        console.log("select to database");

        //Initialize collections
      
        this.users = this.db.collection("users");
    },
}