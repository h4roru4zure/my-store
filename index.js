const express = require('express');
const routerApi = require('./routes');
const app = express();
const port =3000;
app.listen(port,()=>{
  //console.log(`Server is running on port ${port}`);
});
app.use(express.json());


app.get('/',(req,res)=>{
  res.send("Hello world");
});
app.get('/about',(req,res)=>{
  res.send("nueva ruta about  ");
})

app.get('/contact',(req,res)=>{
  res.send("nueva ruta contactanos   ");
})

routerApi(app);




// app.get('/categories/:categoriesId/products/:productsId',(req, res)=>{
//   const {categoriesId,productsId}=req.params;
//   res.json({
//     categoriesId,
//     productsId});
// });

// app.get('/users',(req,res)=>{
//   const {limit,offset}=req.query;
//   if (limit && offset){
//     res.json({
//       limit,
//       offset})
//   }else {
//     res.send("no hay parametros gg wp");
//   }
// });
