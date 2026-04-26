//iniate express
const express=require('express');
const app=express();
const fs= require('fs');
const csv=require('csv-parser');

const result=[]
fs.createReadStream('quotes/quotes.csv')

.pipe(csv())
.on('data',(row)=>
{
    result.push(row);
  

})
.on('end',()=>
{



})



//definign a route
app.get('/',(req,res)=>
{
    const random_quot=result[Math.floor(Math.random()*result.length )];
    res.send(random_quot)
    

}
);


//adding the routes
const authors=require("./routes/authors")
const categorys=require("./routes/categorys")
const querry=require("./routes/querry")

app.use("/authors",authors);
app.use("/categorys",categorys);
app.use("/querry",querry)

//set up port to listen from
const port=process.env.PORT||300;
app.listen(port,()=>
{
    console.log('Server running at port ${port}')
});
