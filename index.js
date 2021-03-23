const express = require('express');
const server = express();
const axios = require('axios');

server.use(express.json())

const port = 3000;

// server.listen(port, ()=> console.log("Server running on port 3000"))

const students = ["zach", 'rachel', 'steve']

// axios.get('https://jsonplaceholder.typicode.com/todos/1')  //{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }

const getData = async () => {
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    return response.data
  } catch(err) {
    console.log(err)
  }
}

// const sum = (a,b) => {
//   return a+b
// }
const sum = (...args) => {
  return args.reduce((total, arg) => total + arg)
}




module.exports = {getData, sum};


