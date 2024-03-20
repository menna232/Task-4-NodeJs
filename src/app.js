
const mongodb = require ('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = 'proj-1' 
mongoClient.connect (connectionUrl , (error , res1)=>{
    if (error) {
        return console.log('error has occured')
    }
    console.log('all perf')
    
    const db = res1.db(dbname)
    db.collection('users').insertOne({
        name : 'ahmed',
        age : 26
    },(error,data) =>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })
    db.collection('users').insertMany([
        {
            name : 'ahmed',
            age : 20
        },
        {
            name : 'reem',
            age : 24
        },
        {
            name : 'tasneem',
            age : 24
        },
        {
            name : 'ahmed',
            age : 24
        },
        {
            name : 'adel',
            age : 40
        }
    ] , (error,data)=>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedCount)
    })

    db.collection('users').findOne({_id:mongodb.ObjectId("642c77561729f396090fb8a2")}
        , (error,user)=>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(user)
    })

      // to get all that match the filter
    db.collection('users').find({age:24}).limit(3).toArray((error,users)=>{
                if(error){
                    return console.log('Error has occurred')
                }
                console.log(users)
            })


            db.collection('users').find({age:24}).limit(3).count((error,users)=>{
            if(error){
                return console.log('Error has occurred')
            }
            console.log(users)
        })
})


