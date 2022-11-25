const {client} = require('./dbConfig');

const deleteSingleDoc = async()=>{

    try {

    const database = client.db("crudOperation");
    const createUsers = database.collection("createUsers");

    const query = { name: "Gazi Mohammad Mortoza Ahmed"};

    const result = await createUsers.deleteOne(query);

    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }

    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }

}
deleteSingleDoc();