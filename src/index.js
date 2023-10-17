//console.log('Hi')
//console.log('Hello There!')

//import { multiplication } from './maths'
//console.log(multiplication(3, 5))

import express from 'express'

const app = express()

const port = 3000

app.get('/',(req, res) => {
    res.send({ msg: 'Hello There This is Your PC' })
})

app.listen(port)