

const {constants} = require("../constants.js")
const errorHandler = (err, req, res, next)=>{
    const statusCode = res.statusCode? res.statusCode:500;

    switch(statusCode){
        case constants.VALIDATION_ERROR:
        res.json({
            title:"validation failed " ,message: err.message, stackTrace: err.stack
        })
        break;
        case constants.NOT_FOUND:
        res.json({
            title:"not found " ,message: err.message, stackTrace: err.stack
        })
        break;
        case constants.UNAUTHORIZED:
        res.json({
            title:"unauthorized " ,message: err.message, stackTrace: err.stack
        })
        break;
        case constants.FROBIDDEN:
        res.json({
            title:"forbbidden " ,message: err.message, stackTrace: err.stack
        })
        break;

       case constants.SERVER_ERROR:
        res.json({title:"server error" ,message: err.message, stackTrace: err.stack})
       default:
        console.log("no error , congarts!")
        break;
    }

};
module.exports = errorHandler;