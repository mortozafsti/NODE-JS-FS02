const {client} = require('./dbConfig')

const insertMultipleDoc = async()=>{

    try {

        const database = client.db("crudOperation");
        const createMultipleUsers = database.collection("createMultipleUsers");

        // create an array of documents to insert
        const docs = [
            { name: "cake", healthy: false },
            { name: "lettuce", healthy: true },
            { name: "donut", healthy: false }
          ];
        const options = { ordered: true };
        const result = await createMultipleUsers.insertMany(docs, options);
        console.log(`${result.insertedCount} documents were inserted`);
        
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}
insertMultipleDoc()