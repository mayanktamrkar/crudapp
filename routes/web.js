import crudController from '../controller/crudController.js';
import express from "express";
//import { append } from 'express/lib/response';
//import { Router } from "express";
const router= express.Router();

//app.set('view engine'.'ejs');


router.get('/',crudController.create)
router.post('/',crudController.getdoc)

export default router ;