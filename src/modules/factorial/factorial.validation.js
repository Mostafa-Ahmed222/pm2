const joi = require("joi")


const getFactorial = {
  body: joi.object().required().keys({
    number: joi.number().min(1)
  })
}

module.exports = {getFactorial}