const {client} = require('./dbConfig')

const updateSingleDoc = async()=>{

    try {

        const database = client.db("crudOperation");
        const createUsers = database.collection("createUsers");

        // create a filter for a movie to update
        const filter = { name: "Gazi Mohammad Mortoza Ahmed" };
        const options = { upsert: true };
        const updateDoc = {
            $set: {
              plot: `Mortoza}`
            },
          };
        const result = await createUsers.updateOne(filter, updateDoc, options);
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );

        
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}
updateSingleDoc()