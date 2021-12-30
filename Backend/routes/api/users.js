const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const UserServices= require('../../services/userservices');
const userServiceInstance= new UserServices(User);

router.get('/', async (req, res) => {
  const users= await userServiceInstance.get();
  return res.json(users);
});
 
//LOG-IN
router.post('/Login',async (req, res) => {
  const result=await userServiceInstance.Login(req);
  if(!result){
    res.status(401).json({ nouserfound: 'Invalid email or password' })
  }
  else{
    res.json({ status: 'OK', token:result})
  }
});

// SIGN_UP
router.post('/Signup',async (req, res) => {
  const data = req.body;
  if (data.name === "") {
    res.status(400).json({ error: 'Please write your name' })
  }
  else if (data.email === "") {
    res.status(400).json({ error: 'Please write your email' })
  }
  else if (!data.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    res.status(400).json({ error: 'Your Email is incorrect, please try again' })
  }
  else if (!data.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)) {
    res.status(400).json({ error: 'Your password must have an uppercase, lowercase, numbers, and character from [ $@#&! ]' })
  }
  else {
    try{
      const newUser=await userServiceInstance.Signup(req);
      res.json({ msg: 'user added successfully',newUser })
    }
    catch(error){
      res.status(400).json({ error: 'Unable to add this user' })
    }
  }
});

module.exports = router;