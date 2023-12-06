const express = require('express')
const router = express.Router()
const blogs = require('../middlewares/requireAuth')
const requireAuth = require('../middlewares/requireAuth')

router.get('/', blogs.getallblog)
router.get('/:blog_id', blogs.getblog)
router.use(requireAuth)
router.post('/create', blogs.addblog)
router.post('/:blog_id', blogs.postComment)

module.exports = router