import express, { Express } from "express";
import bodyparser from "body-parser";

import serverConfig from "./config/serverConfig.js";
import apiRouter from "./routes/index.js"

import bullBoardAdapter from "./config/bullBoardConfig.js"
import SampleWorker from "./workers/SampleWorker.js";
import bodyParser from "body-parser";
import runPython from "./containers/runPythonDocker.js";

const app: Express = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());


app.use('/api',apiRouter);
app.use('/ui', bullBoardAdapter.getRouter());


app.listen(serverConfig.PORT,() => {
  console.log(`Server Started at port *:${serverConfig.PORT}`);
  console.log(`BullBoard dashboard running on: http://localhost:${serverConfig.PORT}/ui`);



  SampleWorker('sampleQueue')

 const code = `x = input()
y = input()
print("value of x is", x)
print("value of y is", y)
`;

const inputCase = `100
200
`;
  
  runPython(code, inputCase);
  
});




