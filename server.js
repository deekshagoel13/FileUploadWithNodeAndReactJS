var express=require('express');
var bodyParser=require('body-parser');
var fileUpload=require('express-fileupload');
var cors=require('cors');
var app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors());
app.post('/upload',(req,res)=>{
    if(!req.files)
        return res.status(400).send('No files were uploaded.');
    let sample=req.files.file;
    sample.mv(__dirname + '/uploads/' + sample.name,(err)=>{
        if(err)
            console.log(err);
    });
})
app.listen(3000,()=>{
    console.log('server is started');
})