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
  res.json({
    name  : "Producto 1",
    price  :1010
  });
})

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
});


