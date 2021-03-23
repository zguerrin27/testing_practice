const express = require('express');
const axios = require('axios');
const fetch = require('node-fetch')

const server = express();
server.use(express.json())
// const port = 3000;
// server.listen(port, ()=> console.log("Server running on port 3000"))


// axios.get('https://jsonplaceholder.typicode.com/todos/1')  //{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }

const getData = async () => {
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    return response.data
  } catch(err) {
    console.log(err)
  }
}

//fetch('https://jsonplaceholder.typicode.com/todos/2'); //{ userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false }
const getData2 = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/2'); 
  const data = await response.json()                                 
  return data
}



// const sum = (a,b) => {
//   return a+b
// }

const sum = (...args) => {
  return args.reduce((total, arg) => total + arg)
}




module.exports = {getData, getData2, sum};
