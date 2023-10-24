import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send({msg: `Get all persons`})
})

router.get('/:id', (req, res) => {
    res.send({msg: `Get Person ${req.params.id}`})
})

router.post('/', (req, res) => {
res.send({msg: `Creating new person`})
})

router.put('/:id', (req, res) => {
res.send({msg: `Updating Person ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
res.send({msg: `Deleting Person ${req.params.id}`})
})

export default router