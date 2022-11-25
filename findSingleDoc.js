const {client} = require('./dbConfig')

const findSingleDoc = async()=>{

    try {
        const database = client.db("crudOperation");
        const createUsers = database.collection("createUsers");

        const query = { name: "Hasan mia" };
        // const options = {       
        //     projection: { _id: 1, name: 1 }
        // };
        const createUser = await createUsers.findOne(query);
        // const user = await createUsers.findOne(query, options);
        // console.log("OutPut Data=========",user.name[0].frequency)
       
        console.log("Output=====",createUser);

    } catch (error) {
        console.log(error)
    }finally{
        await client.close();
    }

}
findSingleDoc()
