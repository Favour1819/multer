const express = require ('express'); 
const router = require('./routers/familyRouter.js');
require('./dbConfig/dbConfig.js')
const PORT = process.env.port

const app = express();
app.use(express.json())

app.use('/api/v1/', router);
app.use ('/uploads', express.static('uploads'))



app.listen(PORT,()=>{
   console.log(`Server is running on ${PORT}`)
})
