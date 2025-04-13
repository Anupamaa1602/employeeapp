const express=require('express');
const app=new express();
const morgan=require('morgan');
app.use(morgan('dev'));

// app.use('/basic',routes);//Redirecting to routes
app.set('view engine','ejs');
app.use(express.static('public'));
const nav=[
    
       {name:'Home',link:'/basic'},
       {name:'Add employee',link:'/basic/addform'}
    
]
const routes=require('./routes/routes')(nav);
app.use('/basic',routes);
app.set("views",__dirname+'/view');//views &__dirname is keyword and view is filename








app.listen(4000,()=>{
console.log('Server is running')
})