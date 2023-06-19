import express from 'express';
import productsRouter from './routers/product.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

export default app;