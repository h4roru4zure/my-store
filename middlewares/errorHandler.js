

function logErrors (err,req,res,next) {
  console.log(err);
 next(err);

}

function errHandler (err,req,res,next) {
console.log('errorHandler');
 res.status(500).json({
  message :err.message ,
  stack :err.stack
});
// next(err);
}
module.exports = {logErrors,errHandler}
