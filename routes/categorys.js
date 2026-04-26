const express=require('express');
const router=express.Router();
const fs=require('fs');
const csv=require('csv-parser');

catagorys=new Set();

fs.createReadStream('quotes/quotes.csv')
.pipe(csv())
.on('data',(row)=>
{
   
    catagorys.add(row.category)



})
.on('end',()=>{})

router.get('/',(req,res)=>{


    res.json([...catagorys])

})

module.exports=router;