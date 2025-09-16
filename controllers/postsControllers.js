const status = require('statuses');
const posts = require('../data/PostsList');


// index

function index(req, res) {

    console.log(req.query.tags);

    let filtered_posts = posts

    if (req.query.tags) {
        filtered_posts = posts.filter(post => post.tags.includes(req.query.tags))
    }

    console.log(filtered_posts);


    res.json('Lista dei post')
}

// show

function show(req, res) {
    res.send('Visualizza il post' + req.params.id)
}

// store

function store(req, res) {

    const newPOstId = posts[posts.length - 1].id + 1;

    const newPost = {
        id: newPOstId,
        titolo: req.body.titolo,
        content: req.body.content,
        img: req.body.img,
        tags: req.body.tags
    }

    posts.push(newPost);

    console.log(posts);

    res.status(201);
    res.json(newPost);
}


// update

function update(req, res) {

    const id = parseInt(req.params.id)

    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Post non trovato"

        })

    }

    post.titolo = req.body.titolo;
    post.content = req.body.content;
    post.tags = req.body.tags;

    console.log(posts);


    res.json(post)


}

// modify

function modify(req, res) {

    const id = parseInt(req.params.id)

    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Post non trovato"

        })

    }

    post.tags = req.body.tags;

    console.log(posts);


    res.json(post)


}

// destroy

function destroy(req, res) {

    const id = parseInt(req.params.id)

    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not found",
            message: "Post not found"

        })
    }

    posts.splice(posts.indexOf(post), 1);

    console.log(posts);

    res.sendStatus(204)

}

module.exports = { index, show, store, update, modify, destroy }