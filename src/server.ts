/*Next Level Week 2 - |Rocketseet

Edmilson Soares
Ago-20202

*/
import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);



