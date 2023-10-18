import {Router} from 'express'

import logger from '../helpers/logger'

const router = Router()

app.get('/',(req, res) => {
    logger.error('Inside the root path')
    const title = process.env.TITLE || 'Server'
    res.send({ msg: title })
})

export default router