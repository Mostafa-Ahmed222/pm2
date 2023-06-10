const { Router } = require("express");
const { getFactorial } = require("./controller/factorial.js");
const validation = require("../../middlewares/validation.js");
const validationSchema = require("../factorial/factorial.validation.js")

const router = Router()


router.post('/', validation(validationSchema.getFactorial),getFactorial)

module.exports = router
