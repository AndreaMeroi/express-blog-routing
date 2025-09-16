const express = require('express');
const app = express();
const port = 8000;
const postsRouter = require('./routers/posts');

// registro il .... 

app.use(express.static('public'));

// registro il body-parser per 'application/json'
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Server del mio blog')
});

app.use('/posts', postsRouter);

app.get('/bacheca', (req, res) => {
    res.send(posts)
})

// Index

app.get('/posts', (req, res) => {
    res.json('Lista dei post')
})

// Show

app.get('/posts/:id', (req, res) => {
    res.send('Visualizza il post' + req.params.id)
})

// Store (create a full new item)

app.post('/posts', (req, res) => {

    console.log(req.body)

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