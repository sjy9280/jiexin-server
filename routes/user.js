import express from 'express'

const router = express.Router();

router.post('/login', async (req, res, next) => {
    try {

    } catch (e) {

    }
})

router.post('/register', async (req, res, next) => {
    try {
        console.log(req.body)
        res.send(req.body)
    } catch (e) {

    }
})

export default router