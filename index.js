console.log("hello");
const express = require("express");
const app = express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('home',{
        title: "ho,e Collection"
    });
});
app.get('/about',(req,res)=>{
    res.render('about',{
        title: "about Collection"
      });
});
app.get('/api',(req,res)=>{
    res.json({
        name:10
    });
});
app.get('/about/:id',(req,res)=>{
    console.log(req.params.id);
   var data = [{
        id : 1,
        productss : "jeans"
    },
    {
        id : 2,
        productss : "tshirt"
    }]
    var result;
  data.forEach((product)=>{
      if(product.id == req.params.id){
          result=product;
        return true;
      }
  })
   

    res.render('productdetails',{
        title : "product Collection",
        product: result
    });
});
app.listen(7000);