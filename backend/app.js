const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app=express();

app.use(cors());

app.get('/api', (req, res)=>{
  res.json({
    message:'Welcome to the API'
  });
});

app.get('/api/posts', verifyToken, (req,res)=>{
  jwt.verify(req.token, 'secretkey', (err,authData)=>{
    if(err){
      res.sendStatus(403);
    }
    else{
      res.json(authData)
    }
  });

});

app.post('/api/login', (req,res)=>{
  const user={
    name:'Tejadevarapalli',
    email:'tejadevarapalli47@gmail.com'
  };
  jwt.sign({user}, 'secretkey',(err, token)=>{
    res.json(token)
  });

});
//Format of the token
//Authorizations: Bearer <access_token>

//Verify token
function verifyToken(req,res,next){
  //get auth header value
  const bearerHeader = req.headers['authtoken'];
 console.log('bearerHeader ',bearerHeader);
  if(typeof bearerHeader !== "undefined"){



    req.token = bearerHeader;

    //next middle ware
    next();

  }else{
    res.sendStatus(403);
  }
}

app.listen(3000, ()=>{
  console.log("Sever started on 3000")
});
