import express from 'express'
const app = express()
const port = process.env.PORT || '3000'
import connectDB from "./db/connect.js";
import web from './routes/web.js'

// import { join } from 'path'
app.set("view engine","ejs");
const DATABASE_URL = process.env.DATABASE_URL ||  "mongodb://localhost:27017" ;

app.use(express.urlencoded({extended:false}))
//static file  ,public folder
// app.use(express.static(join(process.cwd(),"public")))
app.use('/',web);


connectDB(DATABASE_URL);
app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})
