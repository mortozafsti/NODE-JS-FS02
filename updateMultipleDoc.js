const {client} = require('./dbConfig')

const updateMultipleDoc = async()=>{

    try {

        const database = client.db("crudOperation");
        const createUsers = database.collection("createUsers");

        // create a filter for a movie to update
        const filter = { plot: "Mortoza}" };
        const updateMultiDoc = {
            $set: {
              name: `Kamal`,
              age:55
            },
          };
        const result = await createUsers.updateMany(filter, updateMultiDoc);
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );

        
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}
updateMultipleDoc()