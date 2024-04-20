const express=require('express')
const router=express.Router()
const {GetDone,register, login} =require('../controllers/userControllers')

router.get("/",GetDone)
router.post('/register',register)
router.post('/login',login)




module.exports=router