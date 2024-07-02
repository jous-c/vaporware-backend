import express from 'express';
import cors from 'cors';
import MemoriesRouter from './routes/routes.js'

const app = express(); 
app.use(express.static('public/images')) 
app.use(cors());

app.use(express.json());
app.use('/snippets', MemoriesRouter)


app.listen(8090, () => console.log('im running on port 8090'))