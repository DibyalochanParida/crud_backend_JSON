import express from 'express';
import bodyParser from 'body-parser';
import routes from './router.js';
import cors from 'cors';
const port = process.env.PORT || 5000;
const app = express();


app.use(cors({
    origin: '*',
  }));
app.options('*', cors());
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port,()=>{
    console.log(`Now listening on port ${port}`);
});