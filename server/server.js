const express=require('express');
const bcryptjs=require('bcryptjs');
const cookieParser=require('cookie-parser');
const jwt=require('jsonwebtoken');
const { urlencoded } = require('express');

const app=express();
const jwtKey='MY_JWT_KEY';

app.use({urlencoded:true});
app.use(express.json());
app.use(cookieParser());