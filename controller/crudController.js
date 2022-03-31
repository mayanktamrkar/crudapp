import  { crudModel }from "../models/mayank.js";

class crudController{
    static create = async (req,res)=>{
        try {
            const result = await crudModel.find()
            console.log(result);
            res.render("index",{data:result})



            
        } catch (error) {
            console.log(error)
            
        }

       
    }

    static getdoc = async (req,res)=>{
        try {

            //save the data in models
            console.log(req.body)
            const {name,desc,city}=req.body
            const doc = new crudModel({
                name:name,
                desc:desc,
                city:city
            })

            const re= await doc.save()
            console.log(re)

            //display value
            const result = await crudModel.find()
            res.render("index",{data:result})
            
        } catch (error) {
            console.log(error)
            
        }
     
    }
}

export default crudController ;