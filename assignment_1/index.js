const express = require('express')
const validator = require('validator');
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    res.json({ msg: 'Hello World' })
})

app.post('/post', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!validator.isEmail(email)) {
            return res.status(400).json({ msg: "your email is invalid" })
        }
        if (!validator.isLength(password, { min: 8, max: undefined })) {
            return res.status(400).json({ msg: "your password is too short" })
        }
        if (!password.match('.*[a-z].*')) {
            return res.status(400).json({ msg: "your password must contain a lowercase letter" })
        }
        if (!password.match('.*[A-Z].*')) {
            return res.status(400).json({ msg: "your password must contain an uppercase letter" })
        }
        if (!password.match('.*[0-9].*')) {
            return res.status(400).json({ msg: "your password must contain a digit" })
        }
        res.json({ success: true, msg: 'you have been authenticated' });
    } catch (err) {
        console.log(err)
        return res.status(504).json({msg: 'Internal server error'})
    }
})

app.listen(3001, console.log('listening on port 3001'))