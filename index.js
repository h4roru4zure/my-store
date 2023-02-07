const express = require('express');
const app = express();
const port =3500;

app.get('/',(req,res)=>{
  res.send("Hello world");
})

app.get('/about',(req,res)=>{
  res.send("nueva ruta about  ");
})

app.get('/contact',(req,res)=>{
  res.send("nueva ruta contactanos   ");
})
app.get('/products',(req,res)=>{
  res.json([{
    name  : "Producto 1",
    price  :3010
  },
  {
    name  : "Producto 2",
    price  :1430
  },
  {
    name  : "Producto 3",
    price  :10320
  }]);
})

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
});

app.get ("/products/:id", (req, res)=>{
  const {id}=req.params;
  //const id = req.params.id;
  console.log(id);
  res.json({
    id,
    name  : "Producto 1",
    price  :3010
  });
});
app.get('/categories/:categoriesId/products/:productsId',(req, res)=>{
  const {categoriesId,productsId}=req.params;
  res.json({
    categoriesId,
    productsId});
})

