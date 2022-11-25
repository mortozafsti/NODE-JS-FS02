const {client} = require('./dbConfig');

const deleteMultipleDoc = async()=>{

    try {

        const database = client.db("crudOperation");
        const createMultipleUsers = database.collection("createMultipleUsers");

        const query = { name: { $regex: "cake"} };

        const result = await createMultipleUsers.deleteMany(query);

        console.log("Deleted " + result.deletedCount + " documents");

        
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}
deleteMultipleDoc()