const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Homepage')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Us')
})

app.use((req, res) => {
    res.status(404).send('404 page')
})

app.listen(3000, () => {
    console.log('Listening on PORT 3000')
})