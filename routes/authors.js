const express=require('express');
const router = express.Router();
const fs=require('fs');
const csv=require('csv-parser');

authors=new Set();

fs.createReadStream('quotes/quotes.csv')
.pipe(csv())
.on('data',(row)=>{

    authors.add(row.author);


})
.on('end',()=>{



})

router.get('/',(req,res)=>
{

  res.json([...authors])


});

module.exports = router;