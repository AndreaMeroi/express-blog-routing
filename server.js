const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

const posts = [

    {
        titolo: 'Ciambellone',
        content: 'quanto è buono il ciambellone',
        img: 'image1',
        tags: ['ciambella', 'dolce', 'rotondo'],
    },
    {
        titolo: 'cracker',
        content: 'quanto è buono il cracker',
        img: 'immagine2',
        tags: ['cracker', 'salato', 'rettangolare'],
    },
    {
        titolo: 'pane_fritto',
        content: 'quanto è buono il pane_fritto',
        img: 'immagine3',
        tags: ['pane_fritto', 'fritto', 'unto'],
    },
    {
        titolo: 'barbabietola',
        content: 'quanto è buona la barbabietola',
        img: 'immagine4',
        tags: ['barbabietola', 'rossa', 'rotsporcaondo'],
    },
    {
        titolo: 'torta_paesana',
        content: 'quanto è buona la torta_paesana',
        img: 'imagine5',
        tags: ['torta_paesana', 'rustica', 'paesana'],
    },

];

app.get('/bacheca', (req, res) => {
    res.json(posts)
})

// Index

app.get('/posts', (req, res) => {
    res.send('Lista dei post')
})

// Show

app.get('/posts/:id', (req, res) => {
    res.send('Visualizza il post' + req.params.id)
})

// create

app.post('/posts/', (req, res) => {
    res.send('creazione nuovo post')
})

// Update the whole post

app.put('/posts/:id', (req, res) => {
    res.send('Modifica interamente il post' + req.params.id)
})


// Modify post

app.patch('/posts/:id', (req, res) => {
    res.send('Modifica interamente il post' + req.params.id)
})

// Destroy

app.delete('/posts/:id', (req, res) => {
    res.send('Cancellazione del post' + req.params.id)
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})