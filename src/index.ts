import express, { Express } from "express";

import serverConfig from "./config/serverConfig.js";
import apiRouter from "./routes/index.js"
import sampleQueueProducer from "./producers/sampleQueueProducer.js";
import SampleWorker from "./workers/SampleWorker.js";


const app: Express = express();


app.use('/api',apiRouter);


app.listen(serverConfig.PORT,() => {
  console.log(`Server Started at port *:${serverConfig.PORT}`);
  
});

SampleWorker('sampleQueue')

sampleQueueProducer('SampleJob',{
  name:"pandey",
  company:"Microsoft",
  position:"SDE 2 L61",
  location:"BLR | Remote"
},2);

sampleQueueProducer('SampleJob',{
  name:"Sharthak",
  company:"Microsoft",
  position:"SDE 2 L61",
  location:"BLR | Remote"
},1);