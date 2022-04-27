require('dotenv').config()
const express = require('express')
const app = express()
const fs = require('fs')
app.set('view engine', 'hbs')
const contacts = require('../data/data.json')
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

console.log('testjs')

app.get('/', (req,res)=>{
    res.render('index', contacts)
})

app.get('/contacts', (req,res)=>{
    res.json(contacts)
})


const data = fs.readFileSync('./data/data.json');
const myObject= JSON.parse(data);




app.post('/save', (req,res)=>{
    console.log(req.body)
    console.log(myObject)

    //  const {name, tel} = 
    //  myObject.push({
    //      id: Math.round(Math.random()*10000), 
    //      name, 
    //      tel
    //  })
     
     const newData = JSON.stringify(req.body);
     console.log('newData',newData);
     fs.writeFile('./data/data.json', newData, err => {
         if(err) throw err;
         console.log("New data added"); 
        });   
        res.redirect('/save')
})

app.get('/save', (req,res)=>{
    res.send('contact saved')
})




const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})