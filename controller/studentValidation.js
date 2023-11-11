const joi = require("joi");

module.exports={
    addStudent: joi.object().keys({
        major: joi.string().required(),
        userID: joi.number().required(),
    }),
    deleteStudent: joi.object().keys({
        rollNo: joi.number(),
    }),
    updatedStudent: joi.object().keys({
        rollNo: joi.number().required(),
        major: joi.string(),
    }),
}