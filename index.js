const express = require('express')
const cors = require('cors')
const app = express()
const port = 2000
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello node man auto')
})

const users = [
    {
        id: 0,
        name: 'mishu',
        Phone: '0155555',
        email: 'mk2020@hotmail.com'
    },
    {
        id: 1,
        name: 'akiv',
        Phone: '0155555',
        email: 'mk2020 @hotmail.com'
    },
    {
        id: 2,
        name: 'shqakib',
        Phone: '0155555',
        email: 'mk2020 @hotmail.com'
    },
    {
        id: 3,
        name: 'ghabg',
        Phone: '0155555',
        email: 'mk2020 @hotmail.com'
    }
]

app.get('/users', (req, res) => {
    const search = req.query.search;

    //use quarry perameater
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
    res.send(users)
})
//app.methood
app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana'])
})

app.get('/fruit', (req, res) => {
    res.send('yummy')
})

app.listen(port, () => {
    console.log('listening to port', port);
})