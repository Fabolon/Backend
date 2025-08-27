//El arvhivo de ejecucion de nuestra aplicacion
// configurar nuestro servidor y gestionar la logica de negocio

//1. Instalar las dependencias necesarias
import express from "express"
//2.Configurar las dependencias que necesitamos 
const app = express();
const port = 3001;

//3.funcionalidades que nesecite agregar
app.get('/',(req,res)=>{
    res.send("server works!")
});  


//4. Levantar el servidor //3000, 9000
app.listen(port, ()=>{
  console.log(`server is runsning on http://localhost:${port}`)
});
