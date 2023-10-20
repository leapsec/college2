const mongoose = require('mongoose');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(helmet());
mongoose.connect("mongodb://127.0.0.1:27017/prod")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log("connection error");
});
const productSchema = new mongoose.Schema({
    Pname:{
        type:String
    },
    price:{
        type:Number
    },
    Cname:{
        type:String
    },
    color:{
        type:String
    }
});
const product = mongoose.model('product',productSchema,'product');
app.get('/product',async (req,res)=>{
   var data =  await product.find();
   res.json(data);
   console.log('get data');
});
app.post('/product',async (req,res)=>{
    var b1 = req.body;
    var prod = new product();
    prod.Pname = b1.Pname;
    prod.Cname = b1.Cname;
    prod.price = b1.price;
    prod.color = b1.color;
    await prod.save()
    var data = await product.find();
    res.json(data);
    console.log('inserted data');
});
app.get('/product/:id',async (req,res)=>{
    var prod = await product.findById({_id:req.params.id});
    res.json(prod);
    console.log('get data as per id');
});
app.put('/product/:id',async (req,res)=>{
    console.log('updated data...');
    var b1 = req.body;
    var prod = {
        Pname: b1.Pname,
        Cname: b1.Cname,
        price: b1.price,
        color: b1.color
    };
    var prod = await product.findByIdAndUpdate({_id:req.params.id},prod);
    var p1 = await product.findById({_id:req.params.id});
    res.json(p1);
});
app.delete('/product/:id',(req,res)=>{
    product.findByIdAndDelete({_id:req.params.id})
    .then(()=>{
        console.log('Data Deleted...');
    })
    .catch((err)=>{
        console.log('Error while deleting the data');
    });
    res.json({});
});
app.listen(9000);
console.log('port is listenning on 9000');