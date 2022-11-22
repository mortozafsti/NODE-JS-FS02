const {client} = require('./dbConfig')

const insertSingleDoc = async()=>{

    try {

        const database = client.db("crudOperation");
        const createUsers = database.collection("createUsers");

        // create a document to insert
        const doc = {
            name: "Gazi Mohammad Mortoza Ahmed"
          }
          const result = await createUsers.insertOne(doc);
          console.log(`A document was inserted with the _id: ${result.insertedId}`);
        
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}
insertSingleDoc()