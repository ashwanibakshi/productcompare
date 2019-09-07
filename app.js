var express=require('express');
var mongoose=require('mongoose');
var cors=require('cors');
var bodyParser=require('body-parser');
var user=require('./routes/users');
var products=require('./routes/products');
var db= require('./config/database').database;
var passport = require('passport');
var path=require('path');



require('dotenv').config()


mongoose.connect(db, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log('Connected to Database '+db.database);
  });
  
  mongoose.connection.on('error', (err) => {
    console.log('Database error '+err);
  });



//setting epxress //
const app=express();

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:true})) 



app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


app.use(cors());

app.use('/api/user',user);

app.use('/api/products',products);

app.use(express.static(path.join(__dirname, 'uploads')));

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
res.sendFile(path.join(__dirname ,'public/index.html'));
 });



const port = process.env.PORT || 3000;

app.listen(port,console.log(`server runnig on ${port}`));


