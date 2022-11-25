const {client} = require('./dbConfig')

const replaceSingleDoc = async()=>{

    try {

        const database = client.db("crudOperation");
        const createUsers = database.collection("createUsers");

        // create a filter for a movie to update
        const query = { plot: {$regex:"Mortoza}"} };
        const replacement = {
              plot: `Mortoza Ahmed`
          };
        const result = await createUsers.replaceOne(query,replacement);
        console.log(`Modified ${result.modifiedCount} document(s)`);
        
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}
replaceSingleDoc()