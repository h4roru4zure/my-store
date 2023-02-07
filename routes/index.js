const productsRouter =require ('./productsRouter');
const usersRouter = require ('./usersRouter');
//const categories = require ('./categories');
const port =3000;

function routerApi(app){
  app.use('/products',productsRouter);
  app.use('/users',usersRouter);

  app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = routerApi;

