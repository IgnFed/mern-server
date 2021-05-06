const mongoose = require('mongoose');

const URI = "mongodb+srv://DataRecord:bGwBPx4bIjJ6sMjy@cluster1.p87tu.mongodb.net/Cluster1?retryWrites=true&w=majority"
mongoose.connect(`${URI}`, {useNewUrlParser: true, useUnifiedTopology: true} ,()=>{
   console.log('CONNECTED WITH MONGODB')
})

module.exports = mongoose;

