
function errorHandler(error,req,resp,next){
    error.statusCode = error.statusCode||500
    error.status = error.status||'error'

    // if(error.name=='ValidationError'){
    //   const msg =  Object.values(error.details)
    //   .map(el=>el.message.endsWith('[ref:password]')?'Password are not the same.':el.message);
    //   error.message = msg;
    // }

    if(error.name=='ValidationError'){
      const msg =  Object.values(error.errors).map(el=>el.message);
      error.message = msg;
    }

    resp.status(error.statusCode).json({
        status : error.status,
        message: error.message,
        error,
        stack : error.stack
    })
}

export default errorHandler;