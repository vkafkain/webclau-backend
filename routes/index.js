const router = require('express').Router()
const usersRouter = require('./users.routes');

router.use('/', usersRouter);

module.exports = router;


//TODO create workshop routes
//TODO create product routes