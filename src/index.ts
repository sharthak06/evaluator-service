import express, { Express } from "express";

import serverConfig from "./config/serverConfig.js";
import apiRouter from "./routes/index.js"


const app: Express = express();


app.use('/api',apiRouter);


app.listen(serverConfig.PORT,() => {
  console.log(`Server Started at port *:${serverConfig.PORT}`);
  
});