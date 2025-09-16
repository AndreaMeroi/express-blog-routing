const express = require('express')
const router = express.Router();

const postsControllers = require('../controllers/postsControllers');


// Index

router.get('/', postsControllers.index);

// Show

router.get('/:id', postsControllers.show)

// create

router.post('/', postsControllers.store)

// Update the whole post

router.put('/:id', postsControllers.update)


// Modify post

router.patch('/:id', postsControllers.modify)

// Destroy

router.delete('/:id', postsControllers.destroy)


module.exports = router
