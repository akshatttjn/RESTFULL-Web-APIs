const express=require('express');
const MensRanking=require('../models/men');
const router= new express.Router();


router.get("/mens",async(req,res)=>{
    try{
        const allMen= await MensRanking.find({}).sort({"ranking":1});
        res.send(allMen);
    }
    catch(e){
        res.status(400).send(e);
    }
})

router.get("/mens/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const getSingleMan= await MensRanking.findById({_id:_id});
        res.send(getSingleMan);
    }
    catch(e){
        res.status(400).send(e);
    }
})

//classic alternative for line 37 (replace with req.body)
/*const addNewMember = new MensRanking({
    "name":"Akshat",
    "ranking":1,
    "dob":"10 NOV 2001",
    "country":"INDIA"
}); */

router.post("/mens", async (req,res)=>{
    try{
        const addNewMember = new MensRanking(req.body);
        console.log(req.body);
        const newMemberAdded= await addNewMember.save();
        res.status(201).send(newMemberAdded);
    }
    catch(e){
        res.status(400).send(e);
        // res.send(e);
    }
})


router.patch("/mens/:id", async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMan= await MensRanking.findByIdAndUpdate({_id:_id},req.body,{new:true});
        res.send(getMan);
    }
    catch{
        res.status(500).send(e);
    }
})

router.put("/mens/:id", async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMan= await MensRanking.findByIdAndUpdate({_id:_id},req.body,{new:true});
        res.send(getMan);
    }
    catch{
        res.status(500).send(e);
    }
})


router.delete("/mens/:id",async(req,res)=>{
    try{
        const deleteMan= await MensRanking.findByIdAndDelete({_id:req.params.id});
        res.send(deleteMan);
    }
    catch{
        res.status(500).send(e);
    }
})
module.exports=router;