const express = require('express')
const router = express.Router();

// Index

router.get('/', (req, res) => {
    res.json('Lista dei post')
})

// Show

router.get('/:id', (req, res) => {
    res.send('Visualizza il post' + req.params.id)
})

// create

router.post('/', (req, res) => {
    res.send('creazione nuovo post')
})

// Update the whole post

router.put('/:id', (req, res) => {
    res.send('Modifica interamente il post' + req.params.id)
})


// Modify post

router.patch('/:id', (req, res) => {
    res.send('Modifica interamente il post' + req.params.id)
})

// Destroy

router.delete('/:id', (req, res) => {
    res.send('Cancellazione del post' + req.params.id)
})


module.exports = router
