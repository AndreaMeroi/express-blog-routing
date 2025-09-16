function notFound(req, res, next) {
    res.status(404)
    res.json({
        error: true,
        message: 'endpoint not found. 404'
    })
}

module.exports = notFound 